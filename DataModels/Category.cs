using PetaPoco;

namespace CorporateQnA.Data
{
    [TableName("Category")]
    public class Category
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
