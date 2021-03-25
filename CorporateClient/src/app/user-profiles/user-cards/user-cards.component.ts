import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserProfile } from '../../models/user-profile.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html'
})

export class UserCardsComponent implements OnInit {

  users: UserProfile[];
  filteredUsers: UserProfile[];
  userFilter: FormGroup;

  constructor(private userService: UserService,
    private router: Router) {
    this.userFilter = new FormGroup({
      searchUser:new FormControl('')
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUserProfiles().subscribe(data => {
      this.users = data;
      this.filteredUsers = data;
    });
  }

  showUser(user: UserProfile) {
    this.router.navigate(["dashboard/users/" + user.id]);
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user => user.userName.toLowerCase().match(this.userFilter.value['searchUser']));
  }
}
