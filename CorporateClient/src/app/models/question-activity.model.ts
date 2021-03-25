export class QuestionActivity {
  id: number;
  question: string;
  description: string;
  askedUser: number;
  askedBy: string;
  askedUserPic: string;
  categoryId: number;
  upVotes: number;
  views: number;
  noOfAnswers: number;
  dateCreated: Date;
  isSolved: boolean;

  constructor(args) {
    this.id = args.id;
    this.question = args.question;
    this.description = args.description;
    this.askedUser = args.askedUser;
    this.askedBy = args.askedBy;
    this.askedUserPic = args.askedUserPic;
    this.categoryId = args.categoryId;
    this.upVotes = args.upVotes;
    this.views = args.views;
    this.noOfAnswers = args.noOfAnswers;
    this.dateCreated = args.dateCreated;
    this.isSolved = args.isSolved;
  }
}
