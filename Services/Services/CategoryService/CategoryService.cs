using System;
using System.Collections.Generic;
using AutoMapper;

using CorporateQnA.Model;
using CorporateQnA.Model.View;
using DataModel = CorporateQnA.Data;

namespace CorporateQnA.Services
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

        public IEnumerable<Category> GetAllCategories()
        {
            var categories = this.Database.Fetch<DataModel.Category>(string.Empty);
            return this.Mapper.Map<List<Category>>(categories);
        }

        public int AddCategory(Category category)
        {
            var newCategory = this.Mapper.Map<DataModel.Category>(category);
            return Convert.ToInt32(this.Database.Insert(newCategory));
        }

        public IEnumerable<CategoryActivityView> GetCategoryActivity()
        {
            var categories = this.Database.Fetch<DataModel.View.CategoryActivityView>(string.Empty);

            return this.Mapper.Map<List<CategoryActivityView>>(categories);
        }
    }
}
