using CorporateQnA.Model;
using PetaPoco;
using System;

namespace CorporateQnA.Data
{
    [TableName("QAActivity")]
    public class QAActivity
    {
        public int Id { get; set; }

        public int QuestionId { get; set; }

        public int AnswerId { get; set; }

        public int UserId { get; set; }

        public Activity ActivityType { get; set; }

        public DateTime DateCreated { get; set; }
    }
}
