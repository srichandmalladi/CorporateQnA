using AutoMapper;
using System;

using DataModel = CorporateQnA.Data;
using CorporateQnA.Model;

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
                ActivityType=Activity.View
            };
            var newActivity = this.Mapper.Map<DataModel.QAActivity>(activity);
            return Convert.ToInt32(this.DataBase.Insert(newActivity));
        }

        public int AddUpVote(int userId, int questionId)
        {
            var activity = new QAActivity()
            {
                UserId = userId,
                QuestionId = questionId,
                ActivityType = Activity.UpVote
            };

            var newActivity = this.Mapper.Map<DataModel.QAActivity>(activity);
            var data=this.DataBase.SingleOrDefault<DataModel.QAActivity>("where QuestionId=@0 and UserId=@1 and ActivityType=@2 and IsDeleted=0",newActivity.QuestionId,newActivity.UserId,newActivity.ActivityType);

            if (data == null)
            {
                return Convert.ToInt32(this.DataBase.Insert(newActivity));
            }
            return Convert.ToInt32(this.DataBase.Execute("UPDATE QAActivity SET IsDeleted = 1, DateDeleted=@0 WHERE Id = @1", DateTime.Now, data.Id));
        }

        public int AddLikeOrDislike(int userId, int answerId, Activity activityType)
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
                return Convert.ToInt32(this.DataBase.Execute("UPDATE QAActivity SET IsDeleted = 1, DateDeleted=@0 WHERE Id = @1", DateTime.Now, data.Id));
            }
            else
            {
                this.DataBase.Execute("UPDATE QAActivity SET IsDeleted = 1, DateDeleted=@0 WHERE Id = @1", DateTime.Now, data.Id);
                return Convert.ToInt32(this.DataBase.Insert(newActivity));
            }
        }

        public int UpdateBestAnswer(int answerId)
        {
            var questionId = this.DataBase.SingleOrDefault<int>("select QuestionId from Answer where Id=@0", answerId);
            var existingAnswer = this.DataBase.SingleOrDefault<DataModel.Answer>("where QuestionId=@0 and IsBestAnswer=1", questionId);

            if (existingAnswer==null)
            {
                return Convert.ToInt32(this.DataBase.Execute("UPDATE Answer SET IsBestAnswer = 1 WHERE Id = @0", answerId)); 
            }
            else if (existingAnswer.Id == answerId)
            {
                return Convert.ToInt32(this.DataBase.Execute("UPDATE Answer SET IsBestAnswer = 0 WHERE Id = @0", answerId));
            }
            else
            {
                this.DataBase.Execute("UPDATE Answer SET IsBestAnswer = 1 WHERE Id = @0", answerId);
                return Convert.ToInt32(this.DataBase.Execute("UPDATE Answer SET IsBestAnswer = 0 WHERE Id = @0", existingAnswer.Id));
            }
        }
    }
}
