using CoreModels;

namespace Services.Services
{
    public interface IActivityService
    {
        int AddView(QAActivity activity);

        int AddUpVote(QAActivity activity);

        int LikeOrDislike(QAActivity activity);

        int ChangeBestAnswer(int AnsId);
    }
}
