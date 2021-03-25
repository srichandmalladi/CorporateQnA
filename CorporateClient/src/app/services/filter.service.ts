import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Category } from '../models/category.model';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})

export class FilterService {

  private baseURL: string = "/api/";

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<Category[]>(this.baseURL + "categories/all");
  }

  addQuestion(question: Question) {
    return this.http.post(this.baseURL + "questions/add", question);
  }
}
