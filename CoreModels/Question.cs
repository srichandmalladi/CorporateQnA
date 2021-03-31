using System;

namespace CorporateQnA.Model
{
    public class Question
    {
        public Question()
        {
            this.DateCreated = DateTime.Now;
        }

        public int Id { get; set; }

        public int UserId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime DateCreated { get; set; }

        public int CategoryId { get; set; }
    }
}
