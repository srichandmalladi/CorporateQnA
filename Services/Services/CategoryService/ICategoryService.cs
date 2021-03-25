using System.Collections.Generic;

using CoreModels;
using CoreModels.View;

namespace Services.Services
{
    public interface ICategoryService
    {
        IEnumerable<Categories> GetAllCategories();

        int AddCategory(Categories category);

        IEnumerable<CategoryActivityView> GetCategoryActivity();
    }
}
