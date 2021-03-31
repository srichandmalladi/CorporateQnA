using System;

namespace CorporateQnA.Data.View
{
    public class QuestionActivityView
    {
        public int Id { get; set; }

        public string Question { get; set; }

        public string Description { get; set; }

        public int UserId { get; set; }

        public string UserName { get; set; }

        public string ProfilePic { get; set; }

        public int CategoryId { get; set; }

        public int UpVotes { get; set; }

        public int Views { get; set; }

        public int NoOfAnswers { get; set; }

        public DateTime DateCreated { get; set; }

        public bool IsSolved { get; set; }
    }
}
