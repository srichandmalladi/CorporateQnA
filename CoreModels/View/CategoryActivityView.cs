namespace CoreModels.View
{
    public class CategoryActivityView
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int TotalQuestions { get; set; }

        public int TaggedThisWeek { get; set; }

        public int TaggedThisMonth { get; set; }
    }
}
