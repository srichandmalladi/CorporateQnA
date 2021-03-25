using System.Collections.Generic;

using CoreModels;
using CoreModels.View;

namespace Services.Services
{
    public interface IAnswerService
    {
        IEnumerable<AnswersActivityView> GetAnswersActivity(int qId);
        int AddQuestion(Answers answer);
    }
}
