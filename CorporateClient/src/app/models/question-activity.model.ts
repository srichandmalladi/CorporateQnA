export class QuestionActivity {
  id: number;
  title: string;
  description: string;
  userId: number;
  userName: string;
  profilePic: string;
  categoryId: number;
  upVotes: number;
  views: number;
  noOfAnswers: number;
  dateCreated: Date;
  isSolved: boolean;

  constructor(args) {
    this.id = args.id;
    this.title = args.title;
    this.description = args.description;
    this.userId = args.userId;
    this.userName = args.userName;
    this.profilePic = args.profilePic;
    this.categoryId = args.categoryId;
    this.upVotes = args.upVotes;
    this.views = args.views;
    this.noOfAnswers = args.noOfAnswers;
    this.dateCreated = args.dateCreated;
    this.isSolved = args.isSolved;
  }
}
