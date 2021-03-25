using System;

namespace CoreModels
{
    public class Questions
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public string Question { get; set; }

        public string Description { get; set; }

        public DateTime DateCreated { get; set; }

        public int CategoryId { get; set; }

        public Questions()
        {
            this.DateCreated = DateTime.Now;
        }
    }
}
