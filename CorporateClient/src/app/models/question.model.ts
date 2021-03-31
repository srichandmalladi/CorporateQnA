export class Question {
  id: number;
  userId: number;
  title: string;
  description: string;
  categoryId: number;

  constructor(args) {
    this.id = +(args.id || 0);
    this.userId = +(args.userId || localStorage['userId']);
    this.title = args.title;
    this.description = args.description;
    this.categoryId = +args.categoryId;
  }
}
