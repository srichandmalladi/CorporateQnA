using AutoMapper;
using System.Collections.Generic;
using System;

using CorporateQnA.Model.View;
using CorporateQnA.Model;
using DataModel = CorporateQnA.Data;

namespace CorporateQnA.Services
{
    public class AnswerService : IAnswerService
    {
        private PetaPoco.Database Database;
        private IMapper Mapper;

        public AnswerService(PetaPoco.Database db,
            IMapper mapper)
        {
            this.Database = db;
            this.Mapper = mapper;
        }

        public IEnumerable<AnswerActivityView> GetAnswersActivity(int questionId)
        {
            var answers = this.Database.Fetch<DataModel.View.AnswerActivityView>("where QuestionId=@0",questionId);
            return this.Mapper.Map<List<AnswerActivityView>>(answers);
        }

        public int AddAnswer(Answer answer)
        {
            var newAnswer = this.Mapper.Map<DataModel.Answer>(answer);
            return Convert.ToInt32(this.Database.Insert(newAnswer));
        }
    }
}
