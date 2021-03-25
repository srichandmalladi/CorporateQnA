using System;
using System.Collections.Generic;
using AutoMapper;

using CoreModels;
using CoreModels.View;

namespace Services.Services
{
    public class CategoryService:ICategoryService
    {

        private PetaPoco.Database Database;
        private IMapper Mapper;

        public CategoryService(PetaPoco.Database db,
            IMapper mapper)
        {
            this.Database = db;
            this.Mapper = mapper;
        }

        public IEnumerable<Categories> GetAllCategories()
        {
            var categories = this.Database.Fetch<DataModels.Categories>(string.Empty);
            return this.Mapper.Map<List<Categories>>(categories);
        }

        public Int32 AddCategory(Categories category)
        {
            var newCategory = this.Mapper.Map<DataModels.Categories>(category);
            return Convert.ToInt32(this.Database.Insert(newCategory));
        }

        public IEnumerable<CategoryActivityView> GetCategoryActivity()
        {
            var result = new List<CategoryActivityView>();
            var categories =(List<Categories>)this.GetAllCategories();

            categories.ForEach(temp =>
            {
                var category = new CategoryActivityView();
                category.Id = temp.Id;
                category.Name = temp.Name;
                category.Description = temp.Description;
                category.TotalQuestions = this.Database.SingleOrDefault<int>("select COUNT(Id) from CategoryActivityView where Id=@0",category.Id);

                category.TaggedThisWeek = this.Database.SingleOrDefault<int>("select COUNT(Id) from CategoryActivityView WHERE DateCreated > " +
                                                                             "(select DATEADD(Day, 2 - DATEPART(WEEKDAY, GETDATE()), CAST(GETDATE() AS DATE)))");

                category.TaggedThisMonth= this.Database.SingleOrDefault<int>("select COUNT(Id) from CategoryActivityView WHERE DateCreated > " +
                                                                             "(SELECT DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0))");
                result.Add(category);
            });
            return result;
        }
    }
}
