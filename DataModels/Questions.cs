using PetaPoco;
using System;

namespace DataModels
{
    [TableName("Questions")]
    public class Questions
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public string Question { get; set; }

        public string Description { get; set; }

        public DateTime DateCreated { get; set; }

        public int CategoryId { get; set; }
    }
}
