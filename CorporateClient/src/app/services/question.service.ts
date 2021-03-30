import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { QuestionActivity } from '../models/question-activity.model';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  private baseURL: string = "/api/question/";

  constructor(private route: HttpClient) { }


  getQuestionsActivity() {
    return this.route.get<QuestionActivity[]>(this.baseURL + "activities");
  }

  getQuestionsAnswered(id: number) {
    return this.route.get<QuestionActivity[]>(this.baseURL + "getAnsweredQuestions/"+id);
  }
}
