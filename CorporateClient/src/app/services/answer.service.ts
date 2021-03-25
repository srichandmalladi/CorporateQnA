import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Answer } from '../models/answer.model';
import { AnswersActivity } from '../models/answers-activity.model';

@Injectable({
  providedIn: 'root'
})

export class AnswerService {

  private baseURL: string = "/api/answers/";

  constructor(private route: HttpClient) { }

  getAnswersActivity(qId: number) {
    return this.route.get<AnswersActivity[]>(this.baseURL + "getAnswersActivity/" + qId);
  }

  addAnswer(answer: Answer) {
    return this.route.post(this.baseURL + "add", answer);
  }
}
