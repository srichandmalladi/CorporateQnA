using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

using Services.Services;
using CoreModels.View;
using CoreModels;

namespace CorporateApi.Controllers
{
    [Route("api/answers")]
    [ApiController]
    public class AnswersController : ControllerBase
    {

        IAnswerService AnswerService;

        public AnswersController(IAnswerService answerService)
        {
            this.AnswerService = answerService;
        }

        [Route("getAnswersActivity/{qId}")]
        public IEnumerable<AnswersActivityView> GetAnswersActivity(int qId)
        {
            return this.AnswerService.GetAnswersActivity(qId);
        }

        [Route("add")]
        public int AddAnswer(Answers answer)
        {
            return this.AnswerService.AddQuestion(answer);
        }
    }
}
