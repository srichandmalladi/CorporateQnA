using AutoMapper;
using System.Collections.Generic;
using System.Linq;

using CoreModels.View;
using CoreModels;
using CoreModels.Enums;
using System;

namespace Services.Services
{
    public class AnswerService : IAnswerService
    {

        private PetaPoco.Database Database;
        IMapper Mapper;

        public AnswerService(PetaPoco.Database db,
            IMapper mapper)
        {
            this.Database = db;
            this.Mapper = mapper;
        }

        public IEnumerable<AnswersActivityView> GetAnswersActivity(int qId)
        {
            var answers = this.Database.Fetch<DataModels.View.AnswersActivityView>("where QueId=@0",qId).ToList();
            var answerActivity = this.Database.Fetch<AnswersActivity>("select AnsId,Activity,COUNT(Activity) as CountOfActivity from QAActivity where QueId =0 group by AnsId,Activity").ToList();
            List<AnswersActivityView> result = new List<AnswersActivityView>();

            answers.ForEach(answer =>
            {
                var coreAnswer = this.Mapper.Map<AnswersActivityView>(answer);

                AnswersActivity likes = answerActivity.Find(ans => ans.AnsId == answer.Id && ans.Activity == Activity.Like);
                coreAnswer.Likes = (likes != null) ? likes.CountOfActivity : 0;

                AnswersActivity dislikes = answerActivity.Find(que => que.AnsId == coreAnswer.Id && que.Activity == Activity.Dislike);
                coreAnswer.Dislikes = (dislikes != null) ? dislikes.CountOfActivity : 0;

                result.Add(coreAnswer);
            });
            return result;
        }

        public Int32 AddQuestion(Answers answer)
        {
            var newAnswer = this.Mapper.Map<DataModels.Answers>(answer);
            return Convert.ToInt32(this.Database.Insert(newAnswer));
        }
    }
}
