using System.Collections.Generic;
using AutoMapper;
using System.Linq;

using CoreModels;
using CoreModels.View;
using CoreModels.Enums;
using System;

namespace Services.Services
{
    public class QuestionsService:IQuestionsService
    {

        private PetaPoco.Database Database;
        IMapper Mapper;

        public QuestionsService(PetaPoco.Database db,
            IMapper mapper)
        {
            this.Database = db;
            this.Mapper = mapper;
        }

        public Int32 AddQuestion(Questions question)
        {
            var newQuestion = this.Mapper.Map<DataModels.Questions>(question);
            return Convert.ToInt32(this.Database.Insert(newQuestion));
        }

        public IEnumerable<QuestionActivityView> GetAllQuestions()
        {
            var questions = this.Database.Fetch<DataModels.View.QuestionActivityView>(string.Empty).ToList();
            return this.getActivity(questions);
            
        }

        public IEnumerable<QuestionActivityView> getAnsweredQuestions(int id)
        {
            var questions = this.Database.Fetch<DataModels.View.QuestionActivityView>("select * from QuestionActivityView where Id in ( select distinct qa.id from QuestionActivityView as qa inner join Answers as ans on qa.Id=ans.QueId and ans.UserId=@0)", id).ToList();
            return this.getActivity(questions);
        }

        IEnumerable<QuestionActivityView> getActivity(List<DataModels.View.QuestionActivityView> questions)
        {
            var questionActivity = this.Database.Fetch<QuestionActivity>("select QueId,Activity,COUNT(Activity) as CountOfActivity from QAActivity where AnsId=0 group by QueId,Activity").ToList();
            List<QuestionActivityView> result = new List<QuestionActivityView>();
            questions.ForEach(temp => {
                QuestionActivityView question = new QuestionActivityView();
                question = this.Mapper.Map<QuestionActivityView>(temp);

                QuestionActivity upvote = questionActivity.Find(que => que.QueId == question.Id && que.Activity == Activity.UpVote);
                question.UpVotes = (upvote != null) ? upvote.CountOfActivity : 0;

                QuestionActivity view = questionActivity.Find(que => que.QueId == question.Id && que.Activity == Activity.View);
                question.Views = (view != null) ? view.CountOfActivity : 0;

                question.IsSolved = (this.Database.SingleOrDefault<DataModels.Answers>("select Id from Answers where QueId=@0 and IsBestAnswer=1", temp.Id) != null) ? true : false;
                question.NoOfAnswers = this.Database.SingleOrDefault<int>("select COUNT(Id) from Answers where QueId=@0", temp.Id);
                result.Add(question);
            });
            return result;
        }
    }
}
