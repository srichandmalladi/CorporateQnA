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

using DataModels.Authentication;
using CoreModels;
using CoreModels.Enums;

namespace Services.Services
{
    public class UserService:IUserService
    {
        private readonly UserManager<User> UserManager;
        private readonly ApplicationSettings AppSettings;
        private readonly IMapper Mapper;
        private readonly PetaPoco.Database DataBase;

        public UserService(UserManager<User> userManager, IOptions<ApplicationSettings> appSettings,IMapper mapper, PetaPoco.Database db)
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
            var user = this.Mapper.Map<DataModels.Users>(model);
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

        public DataModels.Users GetUserProfile(string userName)
        {
           return this.DataBase.SingleOrDefault<DataModels.Users>("select * from Users where UserName=@0", userName);
        }

        public IEnumerable<UserProfile> GetAllProfiles()
        {
            var usersData = this.DataBase.Fetch<DataModels.Users>(string.Empty).ToList();
            List <UserProfile> result = new List<UserProfile>();

            usersData.ForEach(temp => {
                var user = this.Mapper.Map<UserProfile>(temp);

                user.NoOfQuestionsAsked = this.DataBase.SingleOrDefault<int>("select COUNT(Id) from Questions where UserId=@0", temp.Id);
                user.NoOfQuestionsAnswered = this.DataBase.SingleOrDefault<int>("select COUNT(Id) from Answers where UserId=@0", temp.Id);
                user.NoOfQuestionsSolved = this.DataBase.SingleOrDefault<int>("select COUNT(Id) from Answers where UserId=@0 and IsBestAnswer=1", temp.Id);
                user.Likes = this.DataBase.SingleOrDefault<int>("select COUNT(QAActivity.Id) from QAActivity inner join Answers on Answers.Id=QAActivity.AnsId and Answers.UserId=@0 and QAActivity.Activity=@1", temp.Id, Activity.Like);
                user.Dislikes = this.DataBase.SingleOrDefault<int>("select COUNT(QAActivity.Id) from QAActivity inner join Answers on Answers.Id=QAActivity.AnsId and Answers.UserId=@0 and QAActivity.Activity=@1", temp.Id, Activity.Dislike);
                result.Add(user);
            });
            return result;
        }
    }
}
