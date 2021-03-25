using AutoMapper;

using CoreModels;
using CoreModels.View;
using DataModels.Authentication;

namespace Services.Services
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<UserModel, DataModels.Users>().ReverseMap();
            CreateMap<Questions, DataModels.Questions>().ReverseMap();
            CreateMap<Categories, DataModels.Categories>().ReverseMap();
            CreateMap<QuestionActivityView, DataModels.View.QuestionActivityView>().ReverseMap();
            CreateMap<AnswersActivityView, DataModels.View.AnswersActivityView>().ReverseMap();
            CreateMap<Answers, DataModels.Answers>().ReverseMap();
            CreateMap<QAActivity, DataModels.QAActivity>().ReverseMap();
            CreateMap<UserProfile, DataModels.Users>().ReverseMap();
        }
    }
}