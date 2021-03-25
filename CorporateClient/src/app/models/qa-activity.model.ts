import { Activity } from './activity.enum';

export class QAActivity {
  queId: number;
  ansId: number;
  userId: number;
  activity: Activity;
  activityTime: Date;

  constructor(args) {
    this.queId = args.queId ? args.queId:0;
    this.ansId = args.ansId ? args.ansId:0;
    this.userId = args.userId;
    this.activity = args.activity;
    this.activityTime = args.activity;
  }
}
