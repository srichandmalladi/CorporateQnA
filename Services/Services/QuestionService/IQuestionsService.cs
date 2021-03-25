using System.Collections.Generic;

using CoreModels;
using CoreModels.View;

namespace Services.Services
{
    public interface IQuestionsService
    {
        IEnumerable<QuestionActivityView> GetAllQuestions();

        int AddQuestion(Questions question);

        IEnumerable<QuestionActivityView> getAnsweredQuestions(int id);
    }
}
