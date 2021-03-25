export class CategoryActivity{
  id: number;
  name: string;
  description: string;
  totalQuestions: number;
  taggedThisWeek: number;
  taggedThisMonth: number;

  constructor(args) {
    this.id = +args.id;
    this.name = args.name;
    this.description = args.description;
    this.totalQuestions = +args.totalQuestions;
    this.taggedThisWeek = +args.taggedThisWeek;
    this.taggedThisMonth = +args.taggedThisMonth;
  }
}
