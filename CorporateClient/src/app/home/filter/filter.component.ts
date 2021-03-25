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
  config = {
    backdrop: false,
    keybodard: true,
    animated: true,
    class: 'modal-lg mt-0 border-0'
  };
  editor: Editor = new Editor;
  toolbar: Toolbar = [
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["bold", "italic","underline"],
    ["ordered_list", "bullet_list"],
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

    this.addQuestionForm = new FormGroup({
      question: new FormControl('', Validators.required),
      description: new FormControl(''),
      categoryId: new FormControl('', Validators.required)
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeModal() {
    this.addQuestionForm.reset();
    this.modalRef.hide();
  }

  addQuestion() {
    this.filterService.addQuestion(new Question(this.addQuestionForm.value)).subscribe(data => {
      if (data != 0) {
        this.toastr.success("Question Added");
        this.closeModal();
        this.refreshList();
      }
      else {
        this.toastr.error("Question not added");
      }
    });
  }

  refreshList() {
    this.refreshQuestions.emit();
  }

  filter() {
    this.filterQuestions.emit(this.filtersForm.value);
  }

  resetForm() {
    this.filtersForm.reset();
    this.filterQuestions.emit(this.filtersForm.value);
  }
}
