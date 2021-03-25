using AutoMapper;

using CoreModels;
using System;

namespace Services.Services
{
    public class ActivityService : IActivityService
    {

        private PetaPoco.Database DataBase;
        public IMapper Mapper;

        public ActivityService(PetaPoco.Database database,
            IMapper mapper)
        {
            this.DataBase = database;
            this.Mapper = mapper;
        }

        public Int32 AddView(QAActivity activity)
        {
            var newActivity = this.Mapper.Map<DataModels.QAActivity>(activity);
            return Convert.ToInt32(this.DataBase.Insert(newActivity));
        }

        public Int32 AddUpVote(QAActivity activity)
        {
            var newActivity = this.Mapper.Map<DataModels.QAActivity>(activity);
            var data=this.DataBase.SingleOrDefault<DataModels.QAActivity>("where QueId=@0 and UserId=@1 and Activity=@2",newActivity.QueId,newActivity.UserId,newActivity.Activity);

            if (data == null)
            {
                return Convert.ToInt32(this.DataBase.Insert(newActivity));
            }
            else
            {
                return Convert.ToInt32(null);
            }
        }

        public Int32 LikeOrDislike(QAActivity activity)
        {
            var newActivity = this.Mapper.Map<DataModels.QAActivity>(activity);
            var data=this.DataBase.SingleOrDefault<DataModels.QAActivity>("where AnsId =@0 and UserId =@1",newActivity.AnsId,newActivity.UserId);

            if (data == null)
            {
                return Convert.ToInt32(this.DataBase.Insert(newActivity));
            }
            else if(data.Activity==newActivity.Activity)
            {
                return Convert.ToInt32(null);
            }
            else
            {
                this.DataBase.Delete(data);
                return Convert.ToInt32(this.DataBase.Insert(newActivity));
            }
        }

        public Int32 ChangeBestAnswer(int AnsId)
        {
            var queId = this.DataBase.SingleOrDefault<int>("select QueId from Answers where Id=@0", AnsId);
            var ansId = this.DataBase.SingleOrDefault<int>("select Id from Answers where QueId=@0 and IsBestAnswer=1", queId);

            if (ansId==0)
            {
                return Convert.ToInt32(this.DataBase.Execute("UPDATE Answers SET IsBestAnswer = 1 WHERE Id = @0", AnsId)); 
            }
            else if (ansId == AnsId)
            {
                return Convert.ToInt32(this.DataBase.Execute("UPDATE Answers SET IsBestAnswer = 0 WHERE Id = @0", AnsId));
            }
            else
            {
                this.DataBase.Execute("UPDATE Answers SET IsBestAnswer = 1 WHERE Id = @0", AnsId);
                return Convert.ToInt32(this.DataBase.Execute("UPDATE Answers SET IsBestAnswer = 0 WHERE Id = @0", ansId));
            }
        }
    }
}
