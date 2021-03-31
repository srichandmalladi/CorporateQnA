using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

using CorporateQnA.Model;
using CorporateQnA.Model.View;
using CorporateQnA.Services;

namespace CorporateApi.Controllers
{
    [Route("api/answer")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        private IAnswerService AnswerService;

        public AnswerController(IAnswerService answerService)
        {
            this.AnswerService = answerService;
        }

        //Route: api/answer/activities/questionId
        [Route("activities/{questionId}")]
        public IEnumerable<AnswerActivityView> GetAnswersActivity(int questionId)
        {
            return this.AnswerService.GetAnswersActivity(questionId);
        }

        //Route: api/answer/add
        [Route("add")]
        public int PostAnswer(Answer answer)
        {
            return this.AnswerService.AddAnswer(answer);
        }
    }
}
