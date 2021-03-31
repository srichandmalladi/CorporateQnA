import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { QAActivity } from '../models/qa-activity.model';

@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  private baseURL: string = "/api/activity/";

  constructor(private http: HttpClient) { }

  addView(activity: QAActivity) {
    return this.http.post(this.baseURL + "view/add", activity);
  }

  addUpVote(activity: QAActivity) {
    return this.http.post(this.baseURL + "upvote/add", activity);
  }

  likeOrDislike(activity: QAActivity) {
    return this.http.post(this.baseURL + "likeOrDislike/add", activity);
  }

  updateBestAnswer(id: number) {
    return this.http.get(this.baseURL + "updateBestAnswer/" + id);
  }
}
