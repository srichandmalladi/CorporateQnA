export class UserProfile {
  id: number;
  userName: string;
  profilePictureURL: string;
  position: string;
  company: string;
  location: string;
  likes: number;
  dislikes: number;
  asked: number;
  answered: number;
  solved: number;

  constructor(args) {
    this.id = args.id;
    this.userName = args.userName;
    this.profilePictureURL = args.profilePictureURL;
    this.position = args.position;
    this.company = args.company;
    this.location = args.location;
    this.likes = args.likes;
    this.dislikes = args.dislikes;
    this.asked = args.asked;
    this.answered = args.answered;
    this.solved = args.solved;
  }
}
