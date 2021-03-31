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

        //Route: api/activity/userId/add/view/questionId
        [Route("{userId}/add/view/{questionId}")]
        public int PostView(int userId, int questionId)
        {
            return this.ActivityService.AddView(userId,questionId);
        }

        //Route: api/activity/userId/add/upvote/questionId
        [Route("{userId}/add/upvote/{questionId}")]
        public int PostUpvote(int userId, int questionId)
        {
            return this.ActivityService.AddUpVote(userId, questionId);
        }

        //Route: api/activity/userId/add/like/questionId
        [Route("{userId}/add/like/{questionId}")]
        public int PostLike(int userId, int questionId)
        {
           return this.ActivityService.AddLikeOrDislike(userId, questionId, ActivityType.Like);
        }

        //Route: api/activity/userId/add/dislike/answerId
        [Route("{userId}/add/dislike/{answerId}")]
        public int PostDislike(int userId, int answerId)
        {
            return this.ActivityService.AddLikeOrDislike(userId, answerId, ActivityType.Dislike);
        }

        //Route: api/activity/upvote/updateBestAnswer/Id
        [Route("updateBestAnswer/{answerId}")]
        public int UpdateBestAnswer(int answerId)
        {
            return this.ActivityService.UpdateBestAnswer(answerId);
        }
    }
}
