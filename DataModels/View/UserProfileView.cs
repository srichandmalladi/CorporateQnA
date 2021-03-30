namespace CorporateQnA.Data.View
{
    public class UserProfileView
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string ProfilePictureURL { get; set; }

        public string Position { get; set; }

        public string Company { get; set; }

        public string Location { get; set; }

        public int Likes { get; set; }

        public int Dislikes { get; set; }

        public int NoOfQuestionsAsked { get; set; }

        public int NoOfQuestionsAnswered { get; set; }

        public int NoOfQuestionsSolved { get; set; }
    }
}
