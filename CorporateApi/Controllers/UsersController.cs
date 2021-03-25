using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Services.Services;
using DataModels.Authentication;
using CoreModels;

namespace BookMyShowApi.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private IUserService UserService;
        public UserManager<User> UserManager;

        public UsersController(UserManager<User> userManager, IUserService userService)
        {
            this.UserManager = userManager;
            this.UserService = userService;
        }

        [Route("register")]
        //POST: api/user/register
        public Task<object> Register(UserModel model)
        {
            return this.UserService.Register(model);
        }

        [Route("login")]
        //POST: api/user/login
        public async Task<IActionResult> Login(LoginModel model)
        {
            var token = await this.UserService.Login(model);

            if (token!=null)
            {
                return Ok(new { token });
            }
            else
                return BadRequest(new { message = "Username or password is incorrect." });
        }

        [Route("userProfile")]
        public async Task<object> GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await UserManager.FindByIdAsync(userId);
            var userData = this.UserService.GetUserProfile(user.UserName);
            return userData;
        }

        [Route("all")]
        public IEnumerable<UserProfile> GetAllProfiles()
        {
            return this.UserService.GetAllProfiles();
        }

        [Route("{id}")]
        public UserProfile getUserProfileById(int id)
        {
            return this.UserService.GetAllProfiles().FirstOrDefault(temp => temp.Id == id);
        }
    }
}
