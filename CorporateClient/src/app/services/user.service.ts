import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from '../models/user.model';
import { UserProfile } from '../models/user-profile.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  readonly BaseURL = '/api/users/';

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(this.BaseURL + 'register', user);
  }

  login(formData: any) {
    return this.http.post(this.BaseURL + 'login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURL + 'userProfile');
  }

  getAllUserProfiles() {
    return this.http.get <UserProfile[]>(this.BaseURL + 'all');
  }

  getUserProfileById(id: number) {
    return this.http.get<UserProfile>(this.BaseURL + id);
  }
}
