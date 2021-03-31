using System;

namespace CorporateQnA.Model
{
    public class Answer
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public int QuestionId { get; set; }

        public string Description { get; set; }

        public DateTime DateCreated { get; set; }

        public bool IsBestAnswer { get; set; }

        public Answer()
        {
            this.DateCreated = DateTime.Now;
            this.IsBestAnswer = false;
        }
    }
}
