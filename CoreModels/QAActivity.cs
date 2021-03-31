using System;

namespace CorporateQnA.Model
{
    public class QAActivity
    {
        public QAActivity()
        {
            this.DateCreated = DateTime.Now;
        }
            
        public int Id { get; set; }

        public int QuestionId { get; set; }

        public int AnswerId { get; set; }

        public int UserId { get; set; }

        public ActivityType ActivityType { get; set; }

        public DateTime DateCreated { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime? DateDeleted { get; set; }
    }
}
