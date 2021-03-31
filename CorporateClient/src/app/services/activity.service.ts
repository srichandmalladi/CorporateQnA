import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  private baseURL: string = "/api/activity/";

  constructor(private http: HttpClient) { }

  addView(userId: number, questionId: number) {

    return this.http.get(this.baseURL + userId + "/add/view/" + questionId);
  }

  addUpVote(userId: number, questionId: number) {
    return this.http.get(this.baseURL + userId + "/add/upvote/" + questionId);
  }

  addLike(userId: number, answerId: number) {
    return this.http.get(this.baseURL + userId + "/add/like/" + answerId);
  }

  addDislike(userId: number, answerId: number) {
    return this.http.get(this.baseURL + userId + "/add/dislike/" + answerId);
  }

  updateBestAnswer(id: number) {
    return this.http.get(this.baseURL + "updateBestAnswer/" + id);
  }
}
