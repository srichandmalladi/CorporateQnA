import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html'
})

export class TopBarComponent implements OnInit {

  currentDate: Date = new Date();
  userDetails: User;
  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      (res: any) => {
        this.userDetails = res;
        localStorage['userId'] = this.userDetails.id;
      },
      err => {
        console.log(err);
      }
    );
		}

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

}
