import { Activity } from './activity.enum';

export class QAActivity {
  questionId: number;
  answerId: number;
  userId: number;
  activityType: Activity;
  dateCreated: Date;

  constructor(args) {
    this.questionId = +args.questionId || 0;
    this.answerId = +args.answerId || 0;
    this.userId = args.userId;
    this.activityType = args.activityType;
    this.dateCreated = args.dateCreated;
  }
}
