using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

using Services.Services;
using CoreModels;
using CoreModels.View;

namespace CorporateApi.Controllers
{
    [Route("api/questions")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {

        private IQuestionsService QuestionService;

        public QuestionsController(IQuestionsService questionService)
        {
            this.QuestionService = questionService;
        }

        [Route("add")]
        public int AddQuestion(Questions question)
        {
            return this.QuestionService.AddQuestion(question);
        }

        [Route("getQuestionsActivity")]
        public IEnumerable<QuestionActivityView> GetAllQuestions()
        {
            return this.QuestionService.GetAllQuestions();
        }

        [Route("getQuestionsAnswered/{id}")]
        public IEnumerable<QuestionActivityView> getQuestionsAnswered(int id)
        {
            return this.QuestionService.getAnsweredQuestions(id);
        }
    }
}
