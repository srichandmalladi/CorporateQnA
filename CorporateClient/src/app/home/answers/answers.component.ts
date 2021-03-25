import { Component, Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar} from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';

import { Activity } from '../../models/activity.enum';
import { Answer } from '../../models/answer.model';
import { AnswersActivity } from '../../models/answers-activity.model';
import { QAActivity } from '../../models/qa-activity.model';
import { QuestionActivity } from '../../models/question-activity.model';
import { ActivityService } from '../../services/activity.service';
import { AnswerService } from '../../services/answer.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html'
})

export class AnswersComponent {

  @Input() displayQuestion: QuestionActivity;
  answers: AnswersActivity[];
  editor: Editor = new Editor;
  answerForm: FormGroup;
  expand: boolean = false;
  toolbar: Toolbar = [
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['bold', 'italic', 'underline'],
    ['ordered_list', 'bullet_list'],
    ['blockquote', 'link']
  ];
  loggedUser: number;

  constructor(private answerService: AnswerService,
    private activityService: ActivityService,
    private toastr: ToastrService,)
  {
    this.answerForm = new FormGroup({
      answer: new FormControl('', [Validators.required])
    });
    this.loggedUser = +localStorage['userId'];
  }

  ngOnChanges() {
    this.loadAnswers();
  }

  loadAnswers() {
    this.answerService.getAnswersActivity(this.displayQuestion.id).subscribe(data =>
      this.answers = data
    );
  }

  expandEditor() {
    this.expand = !this.expand;
  }

  submitAnswer() {
    if (this.answerForm.valid) {
      var newAnswer = new Answer('');
      newAnswer.answer = this.answerForm.value.answer;
      newAnswer.queId = this.displayQuestion.id;
      this.answerService.addAnswer(newAnswer).subscribe(
        data => {
          if (data != 0) {
            this.toastr.success("answer Added");
            this.loadAnswers();
            this.editor.setContent('');
          }
          else {
            this.toastr.error("Answer not added");
            this.editor.setContent('');
          }
        },
        err => {
          this.toastr.error("Adding answer Failed");
          console.log(err);
        }
      );
    }
  }

  likeAnswer(ansId: number) {
    var activity = new QAActivity('');
    activity.ansId = ansId;
    activity.userId = +localStorage['userId'];
    activity.activity = Activity.like;
    this.activityService.likeOrDislike(activity).subscribe(
      data => {
        if (data!=0) {
          this.loadAnswers();
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  dislikeAnswer(ansId: number) {
    var activity = new QAActivity('');
    activity.ansId = ansId;
    activity.userId = +localStorage['userId'];
    activity.activity = Activity.dislike;
    this.activityService.likeOrDislike(activity).subscribe(
      data => {
        if (data!=0) {
          this.loadAnswers();
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  changeBestAnswer(id: number) {
    this.activityService.changeBestAnswer(id).subscribe(() =>
      this.loadAnswers());
  }
}
