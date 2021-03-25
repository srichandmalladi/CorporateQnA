using PetaPoco;
using System;

using CoreModels.Enums;

namespace DataModels
{
    [TableName("QAActivity")]
    public class QAActivity
    {
        public int Id { get; set; }

        public int QueId { get; set; }

        public int AnsId { get; set; }

        public int UserId { get; set; }

        public Activity Activity { get; set; }

        public DateTime ActivityTime { get; set; }
    }
}
