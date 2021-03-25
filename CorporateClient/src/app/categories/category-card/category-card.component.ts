import { Component, Input } from '@angular/core';

import { CategoryActivity } from '../../models/category-activity.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html'
})
export class CategoryCardComponent {

  @Input() category: CategoryActivity;

  constructor() { }
}
