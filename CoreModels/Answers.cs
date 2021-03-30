using System;

namespace CorporateQnA.Model
{
    public class Answers
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public int QuestionId { get; set; }

        public string Answer { get; set; }

        public DateTime DateCreated { get; set; }

        public bool IsBestAnswer { get; set; }

        public Answers()
        {
            this.DateCreated = DateTime.Now;
            this.IsBestAnswer = false;
        }
    }
}
