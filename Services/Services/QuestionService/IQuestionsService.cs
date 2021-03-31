using System.Collections.Generic;

using CorporateQnA.Model;
using CorporateQnA.Model.View;


namespace CorporateQnA.Services
{
    public interface IQuestionsService
    {
        IEnumerable<QuestionActivityView> GetQuestionsActivity();

        int AddQuestion(Questions question);

        IEnumerable<QuestionActivityView> GetUserAnsweredQuestions(int id);
    }
}
