import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { UserProfile } from '../../models/user-profile.model';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html'
})
export class DisplayProfileComponent {

  @Output() loadQuestions: EventEmitter<any> = new EventEmitter();
  @Input() user: UserProfile;
  askedQuestions: boolean = true;
  answeredQuestions: boolean = false;

  constructor(private route: Router) { }

  goBack() {
    this.route.navigate(['dashboard/users']);
  }

  getUserAskedQuestions() {
    this.askedQuestions = true;
    this.answeredQuestions = false;
    this.loadQuestions.emit("questionsAsked");
  }

  getUserAnsweredQuestions() {
    this.askedQuestions = false;
    this.answeredQuestions = true;
    this.loadQuestions.emit("questionsAnswered");
  }
}
