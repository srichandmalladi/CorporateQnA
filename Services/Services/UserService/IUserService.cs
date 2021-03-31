using System.Collections.Generic;
using System.Threading.Tasks;

using CorporateQnA.Model.View;
using DataModel = CorporateQnA.Data;
using CorporateQnA.Data.Authentication;

namespace CorporateQnA.Services
{
    public interface IUserService
    {
        Task<object> Register(UserModel model);

        Task<string> Login(LoginModel model);

        DataModel.Users GetUserData(string userName);

        IEnumerable<UserProfileView> GetAllUserProfiles();

        UserProfileView GetProfileById(int id);
    }
}
