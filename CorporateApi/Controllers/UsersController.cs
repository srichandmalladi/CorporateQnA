using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using CorporateQnA.Data.Authentication;
using CorporateQnA.Model.View;
using CorporateQnA.Services;

namespace BookMyShowApi.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private IUserService UserService;
        private UserManager<User> UserManager;

        public UsersController(UserManager<User> userManager,
            IUserService userService)
        {
            this.UserManager = userManager;
            this.UserService = userService;
        }

        //Route: api/users/register
        [Route("register")]
        public Task<object> Register(UserModel model)
        {
            return this.UserService.Register(model);
        }

        //POST: api/user/login
        [Route("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var token = await this.UserService.Login(model);

            if (token != null)
            {
                return Ok(new { token });
            }
            else
            {
                return BadRequest(new { message = "Username or password is incorrect." });
            }
        }

        //Route: api/users/userProfile
        [Route("userProfile")]
        public async Task<object> GetUserProfile()
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type == "UserID").Value;
            var user = await UserManager.FindByIdAsync(userId);
            var userData = this.UserService.GetUserData(user.UserName);
            return userData;
        }

        //Route: api/users/all
        [Route("all")]
        public IEnumerable<UserProfileView> GetAllUserProfiles()
        {
            return this.UserService.GetAllUserProfiles();
        }

        //Route: api/users/id
        [Route("{id}")]
        public UserProfileView GetUserProfileById(int id)
        {
            return this.UserService.GetProfileById(id);
        }
    }
}
