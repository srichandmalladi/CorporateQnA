import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Editor, Toolbar } from "ngx-editor";
import { ToastrService } from 'ngx-toastr';

import { Category } from '../../models/category.model';
import { FilterService } from '../../services/filter.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})

export class FilterComponent implements OnInit {

  @Output() refreshQuestions: EventEmitter<any> = new EventEmitter();
  @Output() filterQuestions: EventEmitter<any> = new EventEmitter();

  filtersForm: FormGroup;
  modalRef: BsModalRef;
  categories: Category[];
  addQuestionForm: FormGroup;
  showFilters: Array<any> = [
    { 'name': 'All', 'value': 'all' },
    { 'name': 'My Questions', 'value': 'myQuestions' },
    { 'name': 'My Participation', 'value': 'myParticipation' },
    { 'name': 'Hot', 'value': 'hot' },
    { 'name': 'Solved', 'value': 'solved' },
    { 'name': 'UnSolved', 'value': 'unsolved' }
  ]
  daysFilters: Array<any> = [
    { 'name': 'All', 'value': 'all' },
    { 'name': 'Recent', 'value': 'recent' },
    { 'name': 'Last 10 days', 'value': 'last10days' },
    { 'name': 'Last 30 Days', 'value': 'last 30 days' }
  ]
  config = {
    backdrop: false,
    keybodard: true,
    animated: true,
    class: 'modal-lg mt-0 border-0'
  };
  editor: Editor = new Editor;
  toolbar: Toolbar = [
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['bold', 'italic', 'underline'],
    ['ordered_list', 'bullet_list'],
    ['blockquote', 'link']
  ];

  constructor(private modalService: BsModalService,
    private filterService: FilterService,
    private toastr: ToastrService)
  {
    this.filtersForm = new FormGroup({
      keyword: new FormControl(''),
      categoryId: new FormControl(''),
      show: new FormControl(''),
      days: new FormControl('')
    });
    this.setDefaultsForFiltersForm();

    this.addQuestionForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.filterService.getAllCategories().subscribe(data =>
      this.categories = data
    );
    this.editor = new Editor({
      content: ``,
      history: true,
      keyboardShortcuts: true
    });
  }

  setDefaultsForFiltersForm() {
    this.filtersForm.get('categoryId').patchValue(0);
    this.filtersForm.get('show').patchValue('all');
    this.filtersForm.get('days').patchValue('all');
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
    this.editor.setContent('');
  }

  closeModal() {
    this.addQuestionForm.reset();
    this.editor.setContent('');
    this.modalRef.hide();
  }

  addQuestion() {
    this.filterService.addQuestion(new Question(this.addQuestionForm.value)).subscribe(
      data => {
        if (data != 0) {
          this.toastr.success("Question Added");
          this.closeModal();
          this.refreshQuestions.emit();
        }
        else {
          this.toastr.error("Question not added");
        }
      },
      err => {
        this.toastr.error("Failed to add Question");
        console.log(err);
      }
    );
  }
  filter() {
    this.filterQuestions.emit(this.filtersForm.value);
  }

  resetForm() {
    this.filtersForm.reset();
    this.setDefaultsForFiltersForm();
    this.filterQuestions.emit(this.filtersForm.value);
  }
}
