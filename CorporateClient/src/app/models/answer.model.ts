export class Answer {
  id: number;
  userId: number;
  questionId: number;
  answer: string;
  dateCreated: Date;
  isBestAnswer: boolean;

  constructor(args) {
    this.id = +(args.id || 0);
    this.userId = +(args.userId || localStorage['userId']);
    this.questionId = +args.questionId;
    this.answer = args.answer;
    this.dateCreated = args.dateCreated;
    this.isBestAnswer = args.isBestAnswer;
  }
}
