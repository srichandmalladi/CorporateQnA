using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

using Services.Services;
using CoreModels;
using CoreModels.View;

namespace CorporateApi.Controllers
{
    [Route("api/categories")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {

        private ICategoryService CategoryService;

        public CategoriesController(ICategoryService categoryService)
        {
            this.CategoryService = categoryService;
        }

        [Route("all")]
        public IEnumerable<Categories> GetAllCategories()
        {
            return this.CategoryService.GetAllCategories();
        }

        [Route("add")]
        public int AddCategory(Categories category)
        {
            return this.CategoryService.AddCategory(category);
        }

        [Route("getCategoryActivity")]
        public IEnumerable<CategoryActivityView> GetCategoryActivity()
        {
            return this.CategoryService.GetCategoryActivity();
        }

    }
}
