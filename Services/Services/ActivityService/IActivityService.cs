using CorporateQnA.Model;

namespace CorporateQnA.Services
{
    public interface IActivityService
    {
        int AddView(QAActivity activity);

        int AddUpVote(QAActivity activity);

        int AddLikeOrDislike(QAActivity activity);

        int UpdateBestAnswer(int answerId);
    }
}
