using PetaPoco;
using System;

namespace CorporateQnA.Data
{
    [TableName("Answer")]
    public class Answers
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public int QuestionId { get; set; }

        public string Answer { get; set; }

        public DateTime DateCreated { get; set; }

        public bool IsBestAnswer { get; set; }
    }
}
