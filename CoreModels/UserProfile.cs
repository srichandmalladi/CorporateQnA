
namespace CoreModels
{
    public class UserProfile
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string ProfilePictureURL { get; set; }

        public string Position { get; set; }

        public string Company { get; set; }

        public string Location { get; set; }

        public int Likes { get; set; }

        public int Dislikes { get; set; }

        public int Asked { get; set; }

        public int Answered { get; set; }

        public int Solved { get; set; }
    }
}
