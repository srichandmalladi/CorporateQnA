using CorporateQnA.Model;

namespace CorporateQnA.Services
{
    public interface IActivityService
    {
        int AddView(int userId, int questionId);

        int AddUpVote(int userId, int questionId);

        int AddLikeOrDislike(int userId, int answerId, Activity activityType);

        int UpdateBestAnswer(int answerId);
    }
}
