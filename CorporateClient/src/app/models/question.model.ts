export class Question {
  id: number;
  userId: number;
  question: string;
  description: string;
  categoryId: number;

  constructor(args) {
    this.id = +(args.id? args.id:0);
    this.userId = +(args.userId ? args.userId : localStorage['userId']);
    this.question = args.question;
    this.description = args.description;
    this.categoryId = +args.categoryId;
  }
}
