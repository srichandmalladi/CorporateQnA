﻿using PetaPoco;
using System;

namespace CorporateQnA.Data
{
    [TableName("Question")]
    public class Question
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime DateCreated { get; set; }

        public int CategoryId { get; set; }
    }
}
