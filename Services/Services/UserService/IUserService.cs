using System.Collections.Generic;
using System.Threading.Tasks;

using CoreModels;
using DataModels;
using DataModels.Authentication;

namespace Services.Services
{
    public interface IUserService
    {
        public Task<object> Register(UserModel model);

        public Task<string> Login(LoginModel model);

        public Users GetUserProfile(string userName);

        public IEnumerable<UserProfile> GetAllProfiles();
    }
}
