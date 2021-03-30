import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Activity } from '../models/activity.enum';
import { QAActivity } from '../models/qa-activity.model';
import { QuestionActivity } from '../models/question-activity.model';
import { UserProfile } from '../models/user-profile.model';
import { ActivityService } from '../services/activity.service';
import { QuestionService } from '../services/question.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  questions: QuestionActivity[];
  filteredQuestions: QuestionActivity[];
  isQuestionSelected: boolean=false;
  selectedQuestion: QuestionActivity;
  showFilters: boolean = false;
  user: UserProfile;
  id: number;
  questionsToDisplay: string;

  constructor(private questionService: QuestionService,
    private activityService: ActivityService,
    private route: Router,
    private userService: UserService,
    private activeRoute: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.isQuestionSelected = false;
    if (this.route.url.match(/users/g)) {
      this.showFilters = false;
      this.activeRoute.params.subscribe(
        (param: Params) => {
          this.id = param['id'];
        }
      );
      this.userService.getUserProfileById(this.id).subscribe(data => this.user = data)
    }
    else {
      this.showFilters = true;
    }
    this.getQuestions();
  }

  getQuestions() {
    if (this.questionsToDisplay == 'questionsAnswered') {
      this.questionService.getQuestionsAnswered(this.id).subscribe(data => {
        this.questions = data;
        this.filteredQuestions = data;
      });
    }
    else {
      this.questionService.getQuestionsActivity().subscribe(data => {
        if (this.showFilters) {
          this.questions = data;
        }
        else {
          this.questions = data.filter(temp => temp.userId == this.user.id);
        }
        this.filteredQuestions = this.questions;
      });
    }
  }

  refreshList() {
    this.getQuestions();
  }

  loadQuestions(event) {
    this.questionsToDisplay = event;
    this.getQuestions();
  }

  questionSelected(questionId: number) {
    this.isQuestionSelected = true;
    if (this.selectedQuestion == null || this.selectedQuestion.id != questionId) {
      this.addViewCount(questionId);
    }
    this.selectedQuestion = this.questions.find(data => data.id == questionId);
  }

  addViewCount(questionId: number) {
    var activity = new QAActivity('');
    activity.questionId = questionId;
    activity.userId = +localStorage['userId'];
    activity.activityType = Activity.view;
    this.activityService.addView(activity).subscribe(
      data => {
        if (data!=0) {
          this.questions.find(temp => temp.id == questionId).views += 1;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  upvote(questionId: number, event: Event) {
    event.stopPropagation();  
    var activity = new QAActivity('');
    activity.questionId = questionId;
    activity.userId = +localStorage['userId'];
    activity.activityType = Activity.upVote;
    this.activityService.addUpVote(activity).subscribe(
      data => {
        if (data!=0) {
          this.questions.find(temp => temp.id == questionId).upVotes += 1;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  filterQuestions(filterData: any) {
    this.filteredQuestions = this.questions;
    this.filterByKeyword(filterData.keyword ? filterData.keyword:'');
    this.filterByCategory(filterData.categoryId ? filterData.categoryId:0);
    this.filterByShow(filterData.show);
    this.filterByDays(filterData.days);
  }

  filterByKeyword(keyword: string) {
    this.filteredQuestions = this.filteredQuestions.filter(temp => temp.question.match(keyword));
  }

  filterByCategory(id: number) {
    if (id!=0) {
      this.filteredQuestions = this.filteredQuestions.filter(temp => temp.categoryId == id);
    }
  }

  filterByShow(show: string) {
    if (show == 'myQuestions') {
      this.filteredQuestions = this.filteredQuestions.filter(temp => temp.userId == localStorage['userId']);
    }
    if (show == 'hot') {
      this.filteredQuestions.sort((a, b) => { return b.upVotes - a.upVotes })
    }
    if (show == 'solved') {
      this.filteredQuestions = this.filteredQuestions.filter(temp => temp.isSolved == true);
    }
    if (show == 'unsolved') {
      this.filteredQuestions = this.filteredQuestions.filter(temp => temp.isSolved == false);
    }
  }

  filterByDays(days: string) {
    if (days == 'recent') {
      this.filteredQuestions.sort((a, b) => a.dateCreated > b.dateCreated ? -1 : a.dateCreated < b.dateCreated ? 1 : 0)
    }
    if (days == 'last10days') {
      this.filteredQuestions = this.filteredQuestions.filter(temp => Math.ceil(Math.abs(Date.now() - new Date(temp.dateCreated).getTime()) / (1000 * 3600 * 24))<=10);
    }
    if (days == 'last30days') {
      this.filteredQuestions = this.filteredQuestions.filter(temp => Math.ceil(Math.abs(Date.now() - new Date(temp.dateCreated).getTime()) / (1000 * 3600 * 24)) <= 30);
    }
  }
}
