using System;

namespace DataModels.View
{
    public class QuestionActivityView
    {
        public int Id { get; set; }

        public string Question { get; set; }

        public string Description { get; set; }

        public int AskedUser { get; set; }

        public string AskedBy { get; set; }

        public string AskedUserPic { get; set; }

        public int CategoryId { get; set; }

        public DateTime DateCreated { get; set; }
    }
}
