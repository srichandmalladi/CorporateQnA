using PetaPoco;

namespace DataModels
{
    [TableName("Categories")]
    public class Categories
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
