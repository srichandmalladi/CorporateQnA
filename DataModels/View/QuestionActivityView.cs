using System;

namespace DataModels.View
{
    public class QuestionActivityView
    {
        public int Id { get; set; }

        public string Question { get; set; }

        public string Description { get; set; }

        public int UserId { get; set; }

        public string UserName { get; set; }

        public string UserPicture { get; set; }

        public int CategoryId { get; set; }

        public DateTime DateCreated { get; set; }
    }
}
