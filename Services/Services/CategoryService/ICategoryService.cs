using System.Collections.Generic;

using CorporateQnA.Model;
using CorporateQnA.Model.View;

namespace CorporateQnA.Services
{
    public interface ICategoryService
    {
        IEnumerable<Category> GetAllCategories();

        int AddCategory(Category category);

        IEnumerable<CategoryActivityView> GetCategoryActivity();
    }
}
