﻿using System;

namespace CorporateQnA.Model
{
    public class QAActivity
    {
        public int Id { get; set; }

        public int QuestionId { get; set; }

        public int AnswerId { get; set; }

        public int UserId { get; set; }

        public Activity ActivityType { get; set; }

        public DateTime DateCreated { get; set; }

        public QAActivity()
        {
            this.DateCreated = DateTime.Now;
        }
    }
}
