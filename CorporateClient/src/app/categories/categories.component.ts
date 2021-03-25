import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

import { CategoryActivity } from '../models/category-activity.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html'
})

export class CategoriesComponent implements OnInit {

  addCategoryForm: FormGroup;
  categoryFilter: FormGroup;
  modalRef: BsModalRef;
  categories: CategoryActivity[];
  filteredCategories: CategoryActivity[];
  config = {
    backdrop: false,
    keybodard: true,
    animated: true,
    class: 'modal-lg mt-0 border-0'
  };

  constructor(private modalService: BsModalService,
    private toastr: ToastrService,
    private categoryService: CategoryService)
  {
    this.addCategoryForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'description': new FormControl('')
    });
    this.categoryFilter = new FormGroup({
      searchText: new FormControl(''),
      showFilter: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.getCategoriesActivity();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeModal() {
    this.addCategoryForm.reset();
    this.modalRef.hide();
  }

  addCategory() {
    this.categoryService.addCategory(this.addCategoryForm.value).subscribe(data => {
      if (data!=0) {
        this.toastr.success("Category Added");
        this.getCategoriesActivity();
        this.closeModal();
      }
      else {
        this.toastr.error("Category add failed");
        this.closeModal();
      }
    });
  }

  getCategoriesActivity() {
    this.categoryService.getCategoriesActivity().subscribe(data => {
      this.categories = data;
      this.filteredCategories = this.categories;
    });
  }

  filterCategories() {
    this.filteredCategories = this.categories.filter(category => category.name.toLowerCase().match(this.categoryFilter.value['searchText']));
  }
}
