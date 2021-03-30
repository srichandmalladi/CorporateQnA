using System;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

using CorporateQnA.Data.Authentication;
using DataModel = CorporateQnA.Data;
using CorporateQnA.Model.View;

namespace CorporateQnA.Services
{
    public class UserService:IUserService
    {
        private UserManager<User> UserManager;
        private ApplicationSettings AppSettings;
        private IMapper Mapper;
        private PetaPoco.Database DataBase;

        public UserService(UserManager<User> userManager,
            IOptions<ApplicationSettings> appSettings,
            IMapper mapper,
            PetaPoco.Database db)
        {
            this.UserManager = userManager;
            this.AppSettings = appSettings.Value;
            this.Mapper = mapper;
            this.DataBase = db;
        }

        public async Task<object> Register(UserModel model)
        {
            var role = "user";
            var newUser = new User()
            {
                UserName = model.UserName,
                Email = model.Email
            };
            var user = this.Mapper.Map<DataModel.Users>(model);
            try
            {
                var result = await UserManager.CreateAsync(newUser, model.Password);
                await UserManager.AddToRoleAsync(newUser, role);
                if(result.Succeeded)
                    this.DataBase.Insert(user);
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<string> Login(LoginModel model)
        {
            var user = await UserManager.FindByNameAsync(model.UserName);
            IdentityOptions _options = new IdentityOptions();

            if (user != null && await UserManager.CheckPasswordAsync(user, model.Password))
            {
                var role = await UserManager.GetRolesAsync(user);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID",user.Id.ToString()),
                        new Claim(_options.ClaimsIdentity.RoleClaimType,role.FirstOrDefault())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(AppSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return token;
            }
            else
                return null;
        }

        public DataModel.Users GetUserData(string userName)
        {
           return this.DataBase.SingleOrDefault<DataModel.Users>("select * from Users where UserName=@0", userName);
        }

        public IEnumerable<UserProfileView> GetAllUserProfiles()
        {
            var usersData = this.DataBase.Fetch<DataModel.View.UserProfileView>("Select * from UserProfileView");
            return this.Mapper.Map<List<UserProfileView>>(usersData);
        }
        public UserProfileView GetProfileById(int id)
        {
            var usersData = this.DataBase.SingleOrDefault<DataModel.View.UserProfileView>("Select * from UserProfileView where Id=@0", id);
            return this.Mapper.Map<UserProfileView>(usersData);
        }
    }
}
