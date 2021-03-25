export class User {
  id: number;
  fullName: string;
  userName: string;
  email: string;
  password: string
  profilePictureURL: string;
  position: string;
  company: string;
  location: string;

  constructor(args) {
    this.id = +args.id;
    this.fullName = args.fullName;
    this.userName = args.userName;
    this.email = args.email;
    this.password = args.passwords.password;
    this.profilePictureURL = args.profilePictureURL;
    this.position = args.position;
    this.company = args.company;
    this.location = args.location;
  }
}
