using System;

namespace DataModels.View
{
    public class AnswersActivityView
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public string ProfilePic { get; set; }

        public string UserName { get; set; }

        public string Answer { get; set; }

        public bool IsBestAnswer { get; set; }

        public DateTime DateCreated { get; set; }
    }
}
