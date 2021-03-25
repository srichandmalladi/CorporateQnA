import { Component, Input, OnInit } from '@angular/core';

import { UserProfile } from '../../../models/user-profile.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html'
})

export class UserCardComponent implements OnInit {

  @Input() user: UserProfile;

  constructor() { }

  ngOnInit(): void {
  }

}
