using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

using CorporateQnA.Model;
using CorporateQnA.Model.View;
using CorporateQnA.Services;

namespace CorporateApi.Controllers
{
    [Route("api/category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private ICategoryService CategoryService;

        public CategoryController(ICategoryService categoryService)
        {
            this.CategoryService = categoryService;
        }

        //Route: api/category/all
        [Route("all")]
        public IEnumerable<Category> GetAllCategories()
        {
            return this.CategoryService.GetAllCategories();
        }

        //Route: api/category/add
        [Route("add")]
        public int PostCategory(Category category)
        {
            return this.CategoryService.AddCategory(category);
        }

        //Route: api/category/activities
        [Route("activities")]
        public IEnumerable<CategoryActivityView> GetCategoryActivity()
        {
            return this.CategoryService.GetCategoryActivity();
        }

    }
}
