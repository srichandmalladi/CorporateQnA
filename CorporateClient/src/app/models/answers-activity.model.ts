export class AnswersActivity {
  id: number;
  userId: string;
  profilePic: string;
  userName: string;
  description: string;
  isBestAnswer: boolean;
  likes: number;
  dislikes: number;
  dateCreated: Date;

  constructor(args) {
    this.id = args.id;
    this.userId = args.userId;
    this.profilePic = args.profilePic;
    this.userName = args.userName;
    this.description = args.description;
    this.isBestAnswer = args.isBestAnswer;
    this.likes = args.likes;
    this.dislikes = args.dislikes;
    this.dateCreated = args.dateCreated;
  }
}
