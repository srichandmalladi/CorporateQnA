using System.Collections.Generic;

using CorporateQnA.Model;
using CorporateQnA.Model.View;

namespace CorporateQnA.Services
{
    public interface IAnswerService
    {
        IEnumerable<AnswerActivityView> GetAnswersActivity(int questionId);

        int AddAnswer(Answer answer);
    }
}
