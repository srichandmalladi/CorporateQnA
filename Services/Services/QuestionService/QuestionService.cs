using System.Collections.Generic;
using AutoMapper;
using System;

using DataModel = CorporateQnA.Data;
using CorporateQnA.Model;
using CorporateQnA.Model.View;

namespace CorporateQnA.Services
{
    public class QuestionsService:IQuestionsService
    {
        private PetaPoco.Database Database;
        private IMapper Mapper;

        public QuestionsService(PetaPoco.Database db,
            IMapper mapper)
        {
            this.Database = db;
            this.Mapper = mapper;
        }

        public int AddQuestion(Question question)
        {
            var newQuestion = this.Mapper.Map<DataModel.Question>(question);
            return Convert.ToInt32(this.Database.Insert(newQuestion));
        }

        public IEnumerable<QuestionActivityView> GetQuestionsActivity()
        {
            var questions = this.Database.Fetch<DataModel.View.QuestionActivityView>("select * from QuestionActivityView");
            return this.Mapper.Map<List<QuestionActivityView>>(questions);
            
        }

        public IEnumerable<QuestionActivityView> GetUserAnsweredQuestions(int id)
        {
            var questions = this.Database.Fetch<DataModel.View.QuestionActivityView>(";Exec UserAnsweredQuestions @0", id);
            return this.Mapper.Map<List<QuestionActivityView>>(questions);
        }
    }
}
