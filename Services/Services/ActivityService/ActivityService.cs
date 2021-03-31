using AutoMapper;
using System;

using DataModel = CorporateQnA.Data;
using CorporateQnA.Model;
using System.Collections.Generic;

namespace CorporateQnA.Services
{
    public class ActivityService : IActivityService
    {
        private PetaPoco.Database DataBase;
        private IMapper Mapper;

        public ActivityService(PetaPoco.Database database,
            IMapper mapper)
        {
            this.DataBase = database;
            this.Mapper = mapper;
        }

        public int AddView(int userId,int questionId)
        {
            var activity=new QAActivity(){
                UserId=userId,
                QuestionId=questionId,
                ActivityType=ActivityType.View
            };
            var newActivity = this.Mapper.Map<DataModel.QAActivity>(activity);
            return Convert.ToInt32(this.DataBase.Insert(newActivity));
        }

        public bool AddUpVote(int userId, int questionId)
        {
            var activity = new QAActivity()
            {
                UserId = userId,
                QuestionId = questionId,
                ActivityType = ActivityType.UpVote
            };

            var newActivity = this.Mapper.Map<DataModel.QAActivity>(activity);
            var data=this.DataBase.SingleOrDefault<DataModel.QAActivity>("where QuestionId=@0 and UserId=@1 and ActivityType=@2 and IsDeleted=0",newActivity.QuestionId,newActivity.UserId,newActivity.ActivityType);

            if (data == null)
            {
                this.DataBase.Insert(newActivity);
                return true;
            }
            data.IsDeleted = true;
            data.DateDeleted = DateTime.UtcNow;
            this.DataBase.Update(data, new List<string> { "IsDeleted", "DateDeleted" });
            return false;
        }

        public int AddLikeOrDislike(int userId, int answerId, ActivityType activityType)
        {
            var activity = new QAActivity()
            {
                UserId = userId,
                AnswerId = answerId,
                ActivityType = activityType
            };
            var newActivity = this.Mapper.Map<DataModel.QAActivity>(activity);
            var data=this.DataBase.SingleOrDefault<DataModel.QAActivity>("where AnswerId=@0 and UserId=@1 and IsDeleted=0",newActivity.AnswerId,newActivity.UserId);

            if (data == null)
            {
                return Convert.ToInt32(this.DataBase.Insert(newActivity));
            }
            else if(data.ActivityType==newActivity.ActivityType)
            {
                data.IsDeleted = true;
                data.DateDeleted = DateTime.UtcNow;
                return Convert.ToInt32(this.DataBase.Update(data, new List<string> { "IsDeleted", "DateDeleted" }));
            }
            else
            {
                data.IsDeleted = true;
                data.DateDeleted = DateTime.UtcNow;
                this.DataBase.Update(data, new List<string> { "IsDeleted", "DateDeleted" });
                return Convert.ToInt32(this.DataBase.Insert(newActivity));
            }
        }

        public int UpdateBestAnswer(int answerId)
        {
            var newBestAnswer = this.DataBase.SingleOrDefault<Answer>("where Id=@0", answerId);
            var existingBestAnswer = this.DataBase.SingleOrDefault<DataModel.Answer>("where QuestionId=@0 and IsBestAnswer=1", newBestAnswer.QuestionId);

            if (existingBestAnswer==null)
            {
                newBestAnswer.IsBestAnswer = true;
                return Convert.ToInt32(this.DataBase.Update(newBestAnswer, new List<string> { "IsBestAnswer" })); 
            }
            else if (existingBestAnswer.Id == answerId)
            {
                newBestAnswer.IsBestAnswer = false;
                this.DataBase.Update(newBestAnswer, new List<string> { "IsBestAnswer" });
                return 0;
            }
            else
            {
                newBestAnswer.IsBestAnswer = true;
                this.DataBase.Update(newBestAnswer, new List<string> { "IsBestAnswer" });
                existingBestAnswer.IsBestAnswer = false;
                return Convert.ToInt32(this.DataBase.Update(existingBestAnswer, new List<string> { "IsBestAnswer" }));
            }
        }
    }
}
