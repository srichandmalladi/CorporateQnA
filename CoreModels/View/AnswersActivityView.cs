using System;

namespace CoreModels.View
{
    public class AnswersActivityView
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public string ProfilePic { get; set; }

        public string UserName { get; set; }

        public string Answer { get; set; }

        public bool IsBestAnswer { get; set; }

        public int Likes { get; set; }

        public int Dislikes { get; set; }

        public DateTime DateCreated { get; set; }
    }
}
