export class Answer {
  id: number;
  userId: number;
  queId: number;
  answer: string;
  dateCreated: Date;
  isBestAnswer: boolean;

  constructor(args) {
    this.id = +(args.id ? args.id : 0);
    this.userId = +(args.userId?args.userId: localStorage['userId']);
    this.queId = +args.queId;
    this.answer = args.answer;
    this.dateCreated = args.dateCreated;
    this.isBestAnswer = args.isBestAnswer;
  }
}
