import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CategoryActivity } from '../models/category-activity.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private baseURL: string = "/api/category/";

  constructor(private route: HttpClient) { }

  addCategory(category: Category) {
    return this.route.post(this.baseURL + "add", category);
  }

  getCategoriesActivity() {
    return this.route.get<CategoryActivity[]>(this.baseURL + "activities");
  }
}
