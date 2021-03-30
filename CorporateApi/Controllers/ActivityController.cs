using Microsoft.AspNetCore.Mvc;
using System;

using CorporateQnA.Model;
using CorporateQnA.Services;

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

        //Route: api/activity/view/add
        [Route("view/add")]
        public Int32 PostView(QAActivity activity)
        {
            return this.ActivityService.AddView(activity);
        }

        //Route: api/activity/upvote/add
        [Route("upvote/add")]
        public int PostUpvote(QAActivity activity)
        {
            return this.ActivityService.AddUpVote(activity);
        }

        //Route: api/activity/upvote/likeOrDislike/add
        [Route("likeOrDislike/add")]
        public int PostLikeOrDislike(QAActivity activity)
        {
           return this.ActivityService.AddLikeOrDislike(activity);
        }

        //Route: api/activity/upvote/updateBestAnswer/Id
        [Route("updateBestAnswer/{AnswerId}")]
        public int UpdateBestAnswer(int AnswerId)
        {
            return this.ActivityService.UpdateBestAnswer(AnswerId);
        }
    }
}
