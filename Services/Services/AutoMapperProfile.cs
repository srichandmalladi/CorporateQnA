using AutoMapper;

using CorporateQnA.Data.Authentication;
using CorporateQnA.Model;
using CorporateQnA.Model.View;
using DataModel = CorporateQnA.Data;

namespace CorporateQnA.Services
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<UserModel, DataModel.Users>().ReverseMap();
            CreateMap<Question, DataModel.Question>().ReverseMap();
            CreateMap<Category, DataModel.Category>().ReverseMap();
            CreateMap<Answer, DataModel.Answer>().ReverseMap();
            CreateMap<QAActivity, DataModel.QAActivity>().ReverseMap();
            CreateMap<UserProfileView, DataModel.Users>().ReverseMap();
            CreateMap<QuestionActivityView, DataModel.View.QuestionActivityView>().ReverseMap();
            CreateMap<AnswerActivityView, DataModel.View.AnswerActivityView>().ReverseMap();
            CreateMap<CategoryActivityView, DataModel.View.CategoryActivityView>().ReverseMap();
            CreateMap<UserProfileView, DataModel.View.UserProfileView>().ReverseMap();
        }
    }
}