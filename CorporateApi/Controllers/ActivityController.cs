using Microsoft.AspNetCore.Mvc;

using Services.Services;
using CoreModels;
using System;

namespace CorporateApi.Controllers
{
    [Route("api/activity")]
    [ApiController]
    public class ActivityController : ControllerBase
    {

        private IActivityService ActivityService;

        public ActivityController(IActivityService activityService)
        {
            this.ActivityService = activityService;
        }

        [Route("view")]
        public Int32 AddView(QAActivity activity)
        {
            return this.ActivityService.AddView(activity);
        }

        [Route("upvote")]
        public int Upvote(QAActivity activity)
        {
            return this.ActivityService.AddUpVote(activity);
        }

        [Route("likeOrDislike")]
        public int LikeOrDislike(QAActivity activity)
        {
           return this.ActivityService.LikeOrDislike(activity);
        }

        [Route("changeBestAnswer/{AnsId}")]
        public int ChangeBestAnswer(int AnsId)
        {
            return this.ActivityService.ChangeBestAnswer(AnsId);
        }
    }
}
