using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

using CorporateQnA.Model;
using CorporateQnA.Model.View;
using CorporateQnA.Services;

namespace CorporateApi.Controllers
{
    [Route("api/question")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private IQuestionsService QuestionService;

        public QuestionController(IQuestionsService questionService)
        {
            this.QuestionService = questionService;
        }

        //Route: api/question/add
        [Route("add")]
        public int PostQuestion(Question question)
        {
            return this.QuestionService.AddQuestion(question);
        }

        //Route: api/question/activities
        [Route("activities")]
        public IEnumerable<QuestionActivityView> GetQuestionsActivity()
        {
            return this.QuestionService.GetQuestionsActivity();
        }

        //Route: api/question/getAnsweredQuestions/userId
        [Route("getAnsweredQuestions/{userId}")]
        public IEnumerable<QuestionActivityView> GetUserAnsweredQuestions(int userId)
        {
            return this.QuestionService.GetUserAnsweredQuestions(userId);
        }
    }
}
