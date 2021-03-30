using PetaPoco;

namespace CorporateQnA.Data
{
    [TableName("Users")]
    public class Users
    {
        public int Id { get; set; }

        public string FullName { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public string ProfilePictureURL { get; set; }

        public string Position { get; set; }

        public string Company { get; set; }

        public string Location { get; set; }
    }
}
