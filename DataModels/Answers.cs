using PetaPoco;
using System;

namespace DataModels
{
    [TableName("Answers")]
    public class Answers
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public int QueId { get; set; }

        public string Answer { get; set; }

        public DateTime DateCreated { get; set; }

        public bool IsBestAnswer { get; set; }
    }
}
