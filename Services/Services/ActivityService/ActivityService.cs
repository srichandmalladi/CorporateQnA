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

        public int AddView(QAActivity activity)
        {
            var newActivity = this.Mapper.Map<DataModel.QAActivity>(activity);
            return Convert.ToInt32(this.DataBase.Insert(newActivity));
        }

        public int AddUpVote(QAActivity activity)
        {
            var newActivity = this.Mapper.Map<DataModel.QAActivity>(activity);
            var data=this.DataBase.SingleOrDefault<DataModel.QAActivity>("where QuestionId=@0 and UserId=@1 and ActivityType=@2",newActivity.QuestionId,newActivity.UserId,newActivity.ActivityType);

            if (data == null)
            {
                return Convert.ToInt32(this.DataBase.Insert(newActivity));
            }
            return 0;
        }

        public int AddLikeOrDislike(QAActivity activity)
        {
            var newActivity = this.Mapper.Map<DataModel.QAActivity>(activity);
            var data=this.DataBase.SingleOrDefault<DataModel.QAActivity>("where AnswerId =@0 and UserId =@1",newActivity.AnswerId,newActivity.UserId);

            if (data == null)
            {
                return Convert.ToInt32(this.DataBase.Insert(newActivity));
            }
            else if(data.ActivityType==newActivity.ActivityType)
            {
                return 0;
            }
            else
            {
                this.DataBase.Delete(data);
                return Convert.ToInt32(this.DataBase.Insert(newActivity));
            }
        }

        public int UpdateBestAnswer(int answerId)
        {
            var questionId = this.DataBase.SingleOrDefault<int>("select QuestionId from Answer where Id=@0", answerId);
            var existingAnswer = this.DataBase.SingleOrDefault<DataModel.Answers>("where QuestionId=@0 and IsBestAnswer=1", questionId);

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
