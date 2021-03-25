import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { QuestionActivity } from '../models/question-activity.model';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  private baseURL: string = "/api/questions/";

  constructor(private route: HttpClient) { }


  getQuestionsActivity() {
    return this.route.get<QuestionActivity[]>(this.baseURL + "getQuestionsActivity");
  }

  getQuestionsAnswered(id: number) {
    return this.route.get<QuestionActivity[]>(this.baseURL + "getQuestionsAnswered/"+id);
  }
}
