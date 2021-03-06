(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rn0":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");






class LoginComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    ngOnInit() {
        if (localStorage.getItem('token') != null)
            this.router.navigateByUrl('/dashboard');
    }
    onSubmit() {
        this.userService.login(this.loginForm.value).subscribe((res) => {
            localStorage.setItem('token', res.token);
            this.router.navigateByUrl('/dashboard');
        }, err => {
            if (err.status == 400)
                this.toastr.error('Incorrect username or password.', 'Authentication failed.');
            else
                console.log(err);
        });
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 13, vars: 2, consts: [["autocomplete", "off", 1, "mb-4", 3, "formGroup"], [1, "form-group"], ["formControlName", "userName", "required", "", 1, "form-control"], ["type", "password", "formControlName", "password", "required", "", 1, "form-control"], [1, "form-row"], [1, "form-group", "col-md-8", "offset-md-2"], [1, "btn", "btn-lg", "btn-block", "btn-primary", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginComponent_Template_button_click_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]], encapsulation: 2 });


/***/ }),

/***/ "+ulX":
/*!***************************************************************************!*\
  !*** ./src/app/user-profiles/user-cards/user-card/user-card.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UserCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserCardComponent.??fac = function UserCardComponent_Factory(t) { return new (t || UserCardComponent)(); };
UserCardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UserCardComponent, selectors: [["app-user-card"]], inputs: { user: "user" }, decls: 34, vars: 9, consts: [[1, "bg-white", "border", "m-3"], [1, "d-flex", "p-3"], [1, "rounded-circle", "mr-3", "profile-pic", 3, "src"], [1, "m-0"], [1, "d-flex", "align-items-center"], [1, "fa", "fa-thumbs-up", "px-1", "text-success"], [1, "mr-4"], [1, "fa", "fa-thumbs-down", "px-1", "text-danger"], [1, "d-flex", "border-top"], [1, "d-flex", "flex-column", "align-items-center", "border-right", "p-3"], [1, "text-muted", "font-size-12"], [1, "d-flex", "flex-column", "align-items-center", "p-3"]], template: function UserCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Questions Asked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Questions Answered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Questions Solved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.user.profilePictureURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user.likes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user.dislikes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user.noOfQuestionsAsked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user.noOfQuestionsAnswered);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user.noOfQuestionsSolved);
    } }, encapsulation: 2 });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\srichand.m\source\repos\CorporateQnA\CorporateClient\src\main.ts */"zUnb");


/***/ }),

/***/ "09Bq":
/*!******************************************!*\
  !*** ./src/app/models/question.model.ts ***!
  \******************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
class Question {
    constructor(args) {
        this.id = +(args.id || 0);
        this.userId = +(args.userId || localStorage['userId']);
        this.title = args.title;
        this.description = args.description;
        this.categoryId = +args.categoryId;
    }
}


/***/ }),

/***/ "3ROY":
/*!**********************************************!*\
  !*** ./src/app/services/activity.service.ts ***!
  \**********************************************/
/*! exports provided: ActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityService", function() { return ActivityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ActivityService {
    constructor(http) {
        this.http = http;
        this.baseURL = "/api/activity/";
    }
    addView(userId, questionId) {
        return this.http.get(this.baseURL + userId + "/add/view/" + questionId);
    }
    addUpVote(userId, questionId) {
        return this.http.get(this.baseURL + userId + "/add/upvote/" + questionId);
    }
    addLike(userId, answerId) {
        return this.http.get(this.baseURL + userId + "/add/like/" + answerId);
    }
    addDislike(userId, answerId) {
        return this.http.get(this.baseURL + userId + "/add/dislike/" + answerId);
    }
    updateBestAnswer(id) {
        return this.http.get(this.baseURL + "updateBestAnswer/" + id);
    }
}
ActivityService.??fac = function ActivityService_Factory(t) { return new (t || ActivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ActivityService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ActivityService, factory: ActivityService.??fac, providedIn: 'root' });


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class UserComponent {
    constructor() { }
}
UserComponent.??fac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 10, vars: 0, consts: [[1, "wrapper"], [1, "wrapped-div"], [1, "tab-header"], ["routerLink", "/user/login", "routerLinkActive", "active", 1, "col-6"], ["routerLink", "/user/registration", "routerLinkActive", "active", 1, "col-6"], [1, "row"], [1, "col-md-10", "offset-md-1"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "8erQ":
/*!****************************************!*\
  !*** ./src/app/models/answer.model.ts ***!
  \****************************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
class Answer {
    constructor(args) {
        this.id = +(args.id || 0);
        this.userId = +(args.userId || localStorage['userId']);
        this.questionId = +args.questionId;
        this.description = args.description;
        this.dateCreated = args.dateCreated;
        this.isBestAnswer = args.isBestAnswer;
    }
}


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/question.service */ "UcdY");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/activity.service */ "3ROY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter/filter.component */ "K8ly");
/* harmony import */ var _display_profile_display_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display-profile/display-profile.component */ "wJeZ");
/* harmony import */ var _answers_answers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./answers/answers.component */ "uYsv");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-moment */ "QUrN");










function HomeComponent_app_filter_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-filter", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("refreshQuestions", function HomeComponent_app_filter_0_Template_app_filter_refreshQuestions_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.refreshList(); })("filterQuestions", function HomeComponent_app_filter_0_Template_app_filter_filterQuestions_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.filterQuestions($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HomeComponent_app_display_profile_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-display-profile", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("loadQuestions", function HomeComponent_app_display_profile_1_Template_app_display_profile_loadQuestions_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.loadQuestions($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("user", ctx_r1.user);
} }
function HomeComponent_div_2_div_2_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const question_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, question_r15.dateCreated), " ");
} }
function HomeComponent_div_2_div_2_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Resolved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c0 = function (a0) { return { "active-question": a0 }; };
const _c1 = function (a0) { return { "resolved-question": a0 }; };
function HomeComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_div_2_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); const question_r15 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r20.questionSelected(question_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_div_2_div_2_Template_div_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); const question_r15 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r22.upvote(question_r15.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, HomeComponent_div_2_div_2_div_21_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, HomeComponent_div_2_div_2_ng_template_22_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const question_r15 = ctx.$implicit;
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](23);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c0, ctx_r9.selectedQuestion == question_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](12, _c1, question_r15.isSolved));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", question_r15.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](question_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](question_r15.upVotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", question_r15.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", question_r15.views, " Views");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", question_r15.noOfAnswers, " Answers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !question_r15.isSolved)("ngIfElse", _r17);
} }
function HomeComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div");
} }
function HomeComponent_div_2_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Select a Question to See Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HomeComponent_div_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, HomeComponent_div_2_ng_template_5_div_0_Template, 4, 0, "div", 32);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.filteredQuestions.length > 0);
} }
function HomeComponent_div_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-answers", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("refreshQuestions", function HomeComponent_div_2_ng_template_7_Template_app_answers_refreshQuestions_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r24.updatedBestAnswer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("displayQuestion", ctx_r14.selectedQuestion);
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, HomeComponent_div_2_div_2_Template, 24, 14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, HomeComponent_div_2_div_4_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, HomeComponent_div_2_ng_template_5_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, HomeComponent_div_2_ng_template_7_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](8);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.filteredQuestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r2.isQuestionSelected)("ngIfThen", _r11)("ngIfElse", _r13);
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "No questions to Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class HomeComponent {
    constructor(questionService, activityService, route, userService, activeRoute) {
        this.questionService = questionService;
        this.activityService = activityService;
        this.route = route;
        this.userService = userService;
        this.activeRoute = activeRoute;
        this.isQuestionSelected = false;
        this.showFilters = false;
    }
    ngOnInit() {
        this.isQuestionSelected = false;
        if (this.route.url.match(/users/g)) {
            this.showFilters = false;
            this.activeRoute.params.subscribe((param) => {
                this.id = param['id'];
            });
            this.userService.getUserProfileById(this.id).subscribe(data => this.user = data);
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
    questionSelected(questionId) {
        this.isQuestionSelected = true;
        if (this.selectedQuestion == null || this.selectedQuestion.id != questionId) {
            this.addViewCount(questionId);
        }
        this.selectedQuestion = this.questions.find(data => data.id == questionId);
    }
    addViewCount(questionId) {
        this.activityService.addView(localStorage['userId'], questionId).subscribe(data => {
            if (data != 0) {
                this.questions.find(data => data.id == questionId).views += 1;
            }
        }, err => {
            console.log(err);
        });
    }
    upvote(questionId, event) {
        event.stopPropagation();
        this.activityService.addUpVote(localStorage['userId'], questionId).subscribe(data => {
            if (data) {
                this.questions.find(data => data.id == questionId).upVotes += 1;
            }
            else {
                this.questions.find(data => data.id == questionId).upVotes -= 1;
            }
        }, err => {
            console.log(err);
        });
    }
    filterQuestions(filterData) {
        this.filteredQuestions = this.questions;
        this.filterByKeyword(filterData.keyword ? filterData.keyword : '');
        this.filterByCategory(filterData.categoryId ? filterData.categoryId : 0);
        this.filterByShow(filterData.show);
        this.filterByDays(filterData.days);
    }
    filterByKeyword(keyword) {
        this.filteredQuestions = this.filteredQuestions.filter(temp => temp.title.match(keyword));
    }
    filterByCategory(id) {
        if (id != 0) {
            this.filteredQuestions = this.filteredQuestions.filter(temp => temp.categoryId == id);
        }
    }
    filterByShow(show) {
        if (show == 'myQuestions') {
            this.filteredQuestions = this.filteredQuestions.filter(temp => temp.userId == localStorage['userId']);
        }
        if (show == 'hot') {
            this.filteredQuestions.sort((a, b) => { return b.upVotes - a.upVotes; });
        }
        if (show == 'solved') {
            this.filteredQuestions = this.filteredQuestions.filter(temp => temp.isSolved == true);
        }
        if (show == 'unsolved') {
            this.filteredQuestions = this.filteredQuestions.filter(temp => temp.isSolved == false);
        }
    }
    filterByDays(days) {
        if (days == 'recent') {
            this.filteredQuestions.sort((a, b) => a.dateCreated > b.dateCreated ? -1 : a.dateCreated < b.dateCreated ? 1 : 0);
        }
        if (days == 'last10days') {
            this.filteredQuestions = this.filteredQuestions.filter(temp => Math.ceil(Math.abs(Date.now() - new Date(temp.dateCreated).getTime()) / (1000 * 3600 * 24)) <= 10);
        }
        if (days == 'last30days') {
            this.filteredQuestions = this.filteredQuestions.filter(temp => Math.ceil(Math.abs(Date.now() - new Date(temp.dateCreated).getTime()) / (1000 * 3600 * 24)) <= 30);
        }
    }
    updatedBestAnswer(eventId) {
        if (eventId != 0) {
            this.questions.find(data => data.id == this.selectedQuestion.id).isSolved = true;
        }
        else {
            this.questions.find(data => data.id == this.selectedQuestion.id).isSolved = false;
        }
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_activity_service__WEBPACK_IMPORTED_MODULE_2__["ActivityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 4, consts: [[3, "refreshQuestions", "filterQuestions", 4, "ngIf"], [3, "user", "loadQuestions", 4, "ngIf"], ["class", "m-3 d-sm-flex question-list", 4, "ngIf"], ["class", "m-5 text-center", 4, "ngIf"], [3, "refreshQuestions", "filterQuestions"], [3, "user", "loadQuestions"], [1, "m-3", "d-sm-flex", "question-list"], [1, "col-sm-7", "px-0"], ["class", "border cursor-pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-sm-5", "px-0", "d-flex"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [1, "border", "cursor-pointer", 3, "ngClass", "click"], [3, "ngClass"], [1, "d-flex", "pt-3", "pl-1", "pr-3"], [1, "ml-3", "rounded-circle", "profile-pic-min", 3, "src"], [1, "ml-0", "pl-3"], [1, "d-flex"], [1, "ml-3", "pl-3", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-up", "text-secondary"], [1, "text-right", "mr-1"], [1, "font-size-12", "question-description", "ml-2", "pl-3", "pr-3", "mb-3", "font-size-14", "text-secondary", 3, "innerHTML"], [1, "d-flex", "justify-content-between", "ml-5", "pl-3", "pr-3", "mb-3"], ["aria-hidden", "true", 1, "fa", "fa-eye", "mr-1", "text-secondary"], [1, "font-size-12", "mr-2"], [1, "font-size-12", "btn", "p-1", "bg-whitesmoke", "border"], [1, "pr-3", "font-size-14"], ["class", "text-secondary", 4, "ngIf", "ngIfElse"], ["resolved", ""], [1, "text-secondary"], [1, "text-success"], ["class", "d-flex-column w-100 select-question-hint", 4, "ngIf"], [1, "d-flex-column", "w-100", "select-question-hint"], ["aria-hidden", "false", 1, "fa", "fa-arrow-left", "text-secondary", "text-center", "fa-5x", "d-block"], [1, "text-center"], [1, "w-100", "answers-list", 3, "displayQuestion", "refreshQuestions"], [1, "m-5", "text-center"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, HomeComponent_app_filter_0_Template, 1, 0, "app-filter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_app_display_profile_1_Template, 1, 1, "app-display-profile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, HomeComponent_div_2_Template, 9, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, HomeComponent_div_3_Template, 3, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.showFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.filteredQuestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.filteredQuestions.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_6__["FilterComponent"], _display_profile_display_profile_component__WEBPACK_IMPORTED_MODULE_7__["DisplayProfileComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _answers_answers_component__WEBPACK_IMPORTED_MODULE_8__["AnswersComponent"]], pipes: [ngx_moment__WEBPACK_IMPORTED_MODULE_9__["TimeAgoPipe"]], encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D/Jk":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        if (localStorage.getItem('token') != null) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(succ => { }, err => {
                if (err.status == 401) {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('/user/login');
                }
            }));
        }
        else
            return next.handle(req.clone());
    }
}
AuthInterceptor.??fac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.??fac });


/***/ }),

/***/ "Dn3B":
/*!********************************************!*\
  !*** ./src/app/services/filter.service.ts ***!
  \********************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class FilterService {
    constructor(http) {
        this.http = http;
        this.baseURL = "/api/";
    }
    getAllCategories() {
        return this.http.get(this.baseURL + "category/all");
    }
    addQuestion(question) {
        return this.http.post(this.baseURL + "question/add", question);
    }
}
FilterService.??fac = function FilterService_Factory(t) { return new (t || FilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FilterService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: FilterService, factory: FilterService.??fac, providedIn: 'root' });


/***/ }),

/***/ "IhOl":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/category.service */ "cPV5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-card/category-card.component */ "uVMK");








function CategoriesComponent_ng_template_20_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Enter Category Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function CategoriesComponent_ng_template_20_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Add Category Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function CategoriesComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, " Add Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function CategoriesComponent_ng_template_20_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r5.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Category Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, CategoriesComponent_ng_template_20_label_11_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, CategoriesComponent_ng_template_20_label_16_Template, 2, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function CategoriesComponent_ng_template_20_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r7.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function CategoriesComponent_ng_template_20_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r8.addCategory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx_r1.addCategoryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.addCategoryForm.get("name").touched && ctx_r1.addCategoryForm.get("name").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.addCategoryForm.get("description").touched && ctx_r1.addCategoryForm.get("description").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx_r1.addCategoryForm.valid);
} }
function CategoriesComponent_app_category_card_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-category-card", 28);
} if (rf & 2) {
    const category_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("category", category_r9);
} }
class CategoriesComponent {
    constructor(modalService, toastr, categoryService) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.categoryService = categoryService;
        this.config = {
            backdrop: false,
            keybodard: true,
            animated: true,
            class: 'modal-lg mt-0 border-0'
        };
        this.addCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        this.categoryFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            searchText: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            showFilter: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0)
        });
    }
    ngOnInit() {
        this.getCategoriesActivity();
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, this.config);
    }
    closeModal() {
        this.addCategoryForm.reset();
        this.modalRef.hide();
    }
    addCategory() {
        this.categoryService.addCategory(this.addCategoryForm.value).subscribe(data => {
            if (data != 0) {
                this.toastr.success("Category Added");
                this.getCategoriesActivity();
                this.closeModal();
            }
            else {
                this.toastr.error("Category add failed");
                this.closeModal();
            }
        }, err => {
            this.toastr.error("Failed to add category");
            console.log(err);
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
    resetFilters() {
        this.categoryFilter.get('searchText').setValue('');
        this.categoryFilter.get('showFilter').setValue(0);
        this.filterCategories();
    }
}
CategoriesComponent.??fac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"])); };
CategoriesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 24, vars: 2, consts: [[1, "d-md-flex", "pt-3", "justify-content-between", "filters", "m-0", 3, "formGroup"], [1, "d-md-flex", "col-md-11"], [1, "form-group", "col-md-3"], [1, "form-control", "border", "d-flex", "p-0", "mw-100"], ["aria-hidden", "true", 1, "fa", "fa-search", "my-auto", "pl-2"], ["type", "text", "placeholder", "Search", "formControlName", "searchText", 1, "form-control", "border-0", "w-100", "h-75", "my-auto", 3, "keyup"], [1, "form-group", "col-md-2"], ["formControlName", "showFilter", 1, "form-control"], ["value", "0"], [1, "btn", "align-self-end", "mb-3", "text-secondary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-repeat"], [1, "btn", "purple", "text-white", "align-self-end", "mb-3", "mr-3", 3, "click"], ["categorymodal", ""], [1, "d-flex", "flex-wrap", "pt-2"], ["class", "col-md-4 cursor-pointer", 3, "category", 4, "ngFor", "ngForOf"], [1, "d-flex", "modal-header", "text-white"], ["type", "button", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 1, "fa", "fa-times", "text-white", 3, "click"], [3, "formGroup"], [1, "modal-body", "row"], [1, "form-group", "col-sm-9"], ["type", "text", "placeholder", "Enter Category Name", "formControlName", "name", 1, "form-control", "border"], ["class", "text-danger", 4, "ngIf"], ["rows", "4", "placeholder", "Enter your text here", "formControlName", "description", 1, "form-control", "bg-whitesmoke", "font-size-14"], [1, "modal-footer", "border-0"], ["type", "button", 1, "btn", 3, "click"], [1, "btn", "purple", "text-white", 3, "disabled", "click"], [1, "text-danger"], [1, "col-md-4", "cursor-pointer", 3, "category"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("keyup", function CategoriesComponent_Template_input_keyup_7_listener() { return ctx.filterCategories(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function CategoriesComponent_Template_button_click_14_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, " Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function CategoriesComponent_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](21); return ctx.openModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "+Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, CategoriesComponent_ng_template_20_Template, 22, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, CategoriesComponent_app_category_card_23_Template, 1, 1, "app-category-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.categoryFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.filteredCategories);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _category_card_category_card_component__WEBPACK_IMPORTED_MODULE_6__["CategoryCardComponent"]], encapsulation: 2 });


/***/ }),

/***/ "K8ly":
/*!*************************************************!*\
  !*** ./src/app/home/filter/filter.component.ts ***!
  \*************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-editor */ "bEYa");
/* harmony import */ var _models_question_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/question.model */ "09Bq");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/filter.service */ "Dn3B");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function FilterComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", category_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](category_r5.name);
} }
function FilterComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const filter_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", filter_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](filter_r6.name);
} }
function FilterComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const filter_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", filter_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](filter_r7.name);
} }
function FilterComponent_ng_template_31_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Enter Question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function FilterComponent_ng_template_31_label_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Add description to your question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function FilterComponent_ng_template_31_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const category_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", category_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](category_r12.name);
} }
function FilterComponent_ng_template_31_label_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Category is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function FilterComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Add Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FilterComponent_ng_template_31_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r13.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, FilterComponent_ng_template_31_label_12_Template, 2, 0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "ngx-editor", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "ngx-editor-menu", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, FilterComponent_ng_template_31_label_19_Template, 2, 0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, FilterComponent_ng_template_31_option_24_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, FilterComponent_ng_template_31_label_25_Template, 2, 0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FilterComponent_ng_template_31_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r15.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FilterComponent_ng_template_31_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r16.addQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r4.addQuestionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.addQuestionForm.get("title").touched && ctx_r4.addQuestionForm.get("title").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("editor", ctx_r4.editor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("editor", ctx_r4.editor)("toolbar", ctx_r4.toolbar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.addQuestionForm.get("description").touched && ctx_r4.addQuestionForm.get("description").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r4.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.addQuestionForm.get("categoryId").touched && ctx_r4.addQuestionForm.get("categoryId").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r4.addQuestionForm.valid);
} }
class FilterComponent {
    constructor(modalService, filterService, toastr) {
        this.modalService = modalService;
        this.filterService = filterService;
        this.toastr = toastr;
        this.refreshQuestions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterQuestions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showFilters = [
            { 'name': 'All', 'value': 'all' },
            { 'name': 'My Questions', 'value': 'myQuestions' },
            { 'name': 'My Participation', 'value': 'myParticipation' },
            { 'name': 'Hot', 'value': 'hot' },
            { 'name': 'Solved', 'value': 'solved' },
            { 'name': 'UnSolved', 'value': 'unsolved' }
        ];
        this.daysFilters = [
            { 'name': 'All', 'value': 'all' },
            { 'name': 'Recent', 'value': 'recent' },
            { 'name': 'Last 10 days', 'value': 'last10days' },
            { 'name': 'Last 30 Days', 'value': 'last 30 days' }
        ];
        this.config = {
            backdrop: false,
            keybodard: true,
            animated: true,
            class: 'modal-lg mt-0 border-0'
        };
        this.editor = new ngx_editor__WEBPACK_IMPORTED_MODULE_2__["Editor"];
        this.toolbar = [
            [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
            ['bold', 'italic', 'underline'],
            ['ordered_list', 'bullet_list'],
            ['blockquote', 'link']
        ];
        this.filtersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            keyword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            show: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('all'),
            days: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('all')
        });
        this.addQuestionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    ngOnInit() {
        this.filterService.getAllCategories().subscribe(data => this.categories = data);
        this.editor = new ngx_editor__WEBPACK_IMPORTED_MODULE_2__["Editor"]({
            content: ``,
            history: true,
            keyboardShortcuts: true
        });
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, this.config);
        this.editor.setContent('');
    }
    closeModal() {
        this.addQuestionForm.reset();
        this.editor.setContent('');
        this.modalRef.hide();
    }
    addQuestion() {
        this.filterService.addQuestion(new _models_question_model__WEBPACK_IMPORTED_MODULE_3__["Question"](this.addQuestionForm.value)).subscribe(data => {
            if (data != 0) {
                this.toastr.success("Question Added");
                this.closeModal();
                this.refreshQuestions.emit();
            }
            else {
                this.toastr.error("Question not added");
            }
        }, err => {
            this.toastr.error("Failed to add Question");
            console.log(err);
        });
    }
    filter() {
        this.filterQuestions.emit(this.filtersForm.value);
    }
    resetForm() {
        this.filtersForm.get('keyword').setValue('');
        this.filtersForm.get('categoryId').setValue(0);
        this.filtersForm.get('show').setValue('all');
        this.filtersForm.get('days').setValue('all');
        this.filterQuestions.emit(this.filtersForm.value);
    }
}
FilterComponent.??fac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
FilterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], outputs: { refreshQuestions: "refreshQuestions", filterQuestions: "filterQuestions" }, decls: 33, vars: 4, consts: [[1, "pt-3", "filters", "m-0", "d-md-flex", "justify-content-between", 3, "formGroup"], [1, "d-md-flex", "col-md-10"], [1, "form-group", "col-md-3"], [1, "form-control", "border", "d-flex", "p-0", "mw-100"], ["aria-hidden", "true", 1, "fa", "fa-search", "my-auto", "pl-2"], ["type", "text", "placeholder", "Search", "formControlName", "keyword", 1, "form-control", "border-0", "w-100", "h-75", "my-auto", 3, "keyup"], [1, "form-group", "col-md-2"], ["formControlName", "categoryId", 1, "form-control", 3, "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "show", 1, "form-control", 3, "change"], ["formControlName", "days", 1, "form-control", 3, "change"], [1, "btn", "align-self-end", "mb-3", "text-secondary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-repeat"], [1, "btn", "purple", "text-white", "align-self-end", "mb-3", "mr-3", 3, "click"], ["modal", ""], [3, "value"], [1, "d-flex-column"], [1, "d-flex", "modal-header", "text-white", "py-2"], [1, "m-0", "p-1"], ["type", "button", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 1, "fa", "fa-times", "text-white", 3, "click"], [3, "formGroup"], [1, "modal-body"], [1, "form-group", "col-md-8"], ["type", "text", "placeholder", "Enter Your Question", "formControlName", "title", 1, "form-control", "border"], ["class", "text-danger", 4, "ngIf"], [1, "form-group", "col-md-12"], [1, "editor", "border"], ["formControlName", "description", 3, "editor"], [3, "editor", "toolbar"], [1, "form-group", "col-md-4"], ["formControlName", "categoryId", 1, "form-control"], [1, "modal-footer", "border-0"], [1, "btn", 3, "click"], [1, "btn", "purple", "text-white", 3, "disabled", "click"], [1, "text-danger"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function FilterComponent_Template_input_keyup_7_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function FilterComponent_Template_select_change_11_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, FilterComponent_option_14_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function FilterComponent_Template_select_change_18_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, FilterComponent_option_19_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Sort by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function FilterComponent_Template_select_change_23_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, FilterComponent_option_24_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FilterComponent_Template_button_click_25_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FilterComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](32); return ctx.openModal(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "+Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, FilterComponent_ng_template_31_Template, 31, 9, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.filtersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.showFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.daysFilters);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_editor__WEBPACK_IMPORTED_MODULE_2__["NgxEditorComponent"], ngx_editor__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]], encapsulation: 2 });


/***/ }),

/***/ "M0ag":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SideBarComponent, TopBarComponent, TopNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "yObi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_0__["SideBarComponent"]; });

/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "TAAU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__["TopBarComponent"]; });

/* harmony import */ var _top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-nav-bar/top-nav-bar.component */ "gYzK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavBarComponent", function() { return _top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["TopNavBarComponent"]; });






/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _role_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-guard.service */ "qRNK");



class AuthGuard {
    constructor(router, roleGuardService) {
        this.router = router;
        this.roleGuardService = roleGuardService;
    }
    canActivate(next) {
        if (localStorage.getItem('token') != null) {
            let roles = next.data['permittedRoles'];
            if (roles) {
                if (this.roleGuardService.roleGuard(roles))
                    return true;
                else {
                    this.router.navigate(['/forbidden']);
                    return false;
                }
            }
            return true;
        }
        else {
            this.router.navigate(['/user/login']);
            return false;
        }
    }
}
AuthGuard.??fac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_role_guard_service__WEBPACK_IMPORTED_MODULE_2__["RoleGuardService"])); };
AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthGuard, factory: AuthGuard.??fac, providedIn: 'root' });


/***/ }),

/***/ "PPYe":
/*!*************************************************************!*\
  !*** ./src/app/user/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user.model */ "Tj/N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ "qfBg");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function RegistrationComponent_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegistrationComponent_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Invalid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegistrationComponent_label_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegistrationComponent_label_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Minimum 4 characters required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegistrationComponent_label_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function RegistrationComponent_label_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Confirm Password does not match. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
class RegistrationComponent {
    constructor(userService, toastr) {
        this.userService = userService;
        this.toastr = toastr;
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            passwords: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4)]),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            }, this.comparePasswords),
            profilePictureURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.registrationForm.reset();
    }
    comparePasswords(fb) {
        if (fb.get('password').value != fb.get('confirmPassword').value) {
            return { passwordMismatch: true };
        }
        else {
            return null;
        }
    }
    processImage(event) {
        const reader = new FileReader();
        if (event.target.files[0] && event.target.files.length) {
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = () => {
                this.registrationForm.value.profilePictureURL = reader.result;
            };
        }
    }
    onSubmit() {
        this.userService.register(new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"](this.registrationForm.value)).subscribe((res) => {
            if (res.succeeded) {
                this.registrationForm.reset();
                this.toastr.success('New user created!', 'Registration successful.');
            }
            else {
                res.errors.forEach((element) => {
                    switch (element.code) {
                        case 'DuplicateUserName':
                            this.toastr.error('Username is already taken', 'Registration failed.');
                            break;
                        default:
                            this.toastr.error(element.description, 'Registration failed.');
                            break;
                    }
                });
            }
        }, err => {
            console.log(err);
        });
    }
}
RegistrationComponent.??fac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
RegistrationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 49, vars: 8, consts: [["autocomplete", "off", 3, "formGroup"], [1, "form-group", "required"], ["formControlName", "userName", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "fullName", 1, "form-control"], [1, "form-group"], ["formControlName", "email", 1, "form-control"], [1, "form-row"], [1, "form-group", "col-6"], ["formControlName", "position", 1, "form-control"], ["formControlName", "company", 1, "form-control"], ["formControlName", "location", 1, "form-control"], ["formGroupName", "passwords", 1, "form-row"], [1, "form-group", "required", "col-6"], ["type", "password", "formControlName", "password", 1, "form-control"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control"], ["formControlName", "profilePictureURL", "type", "file", "accept", "image/*", 1, "text-white", 3, "change"], [1, "form-group", "col-md-8", "offset-md-2"], [1, "btn", "btn-lg", "btn-block", "btn-primary", 3, "disabled", "click"], [1, "text-danger"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, RegistrationComponent_label_5_Template, 2, 0, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "FullName");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, RegistrationComponent_label_14_Template, 2, 0, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](32, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](33, RegistrationComponent_label_33_Template, 2, 0, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](34, RegistrationComponent_label_34_Template, 2, 0, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](38, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](39, RegistrationComponent_label_39_Template, 2, 0, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](40, RegistrationComponent_label_40_Template, 2, 0, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43, "Upload Profile Picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function RegistrationComponent_Template_input_change_44_listener($event) { return ctx.processImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function RegistrationComponent_Template_button_click_47_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](48, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.registrationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.registrationForm.get("userName").touched && ctx.registrationForm.get("userName").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.registrationForm.get("email").touched && ctx.registrationForm.get("email").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.registrationForm.get("passwords.password").touched && (ctx.registrationForm.get("passwords.password").errors == null ? null : ctx.registrationForm.get("passwords.password").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.registrationForm.get("passwords.password").touched && (ctx.registrationForm.get("passwords.password").errors == null ? null : ctx.registrationForm.get("passwords.password").errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.registrationForm.get("passwords.confirmPassword").touched && (ctx.registrationForm.get("passwords.confirmPassword").errors == null ? null : ctx.registrationForm.get("passwords.confirmPassword").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.registrationForm.get("passwords.confirmPassword").touched && (ctx.registrationForm.get("passwords.confirmPassword").errors == null ? null : ctx.registrationForm.get("passwords.confirmPassword").errors.passwordMismatch));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx.registrationForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"]], encapsulation: 2 });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/top-bar/top-bar.component */ "TAAU");
/* harmony import */ var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/side-bar/side-bar.component */ "yObi");
/* harmony import */ var _shared_top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/top-nav-bar/top-nav-bar.component */ "gYzK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class DashboardComponent {
    constructor() { }
}
DashboardComponent.??fac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 8, vars: 0, consts: [[1, "w-100", "mx-0", "px-0"], [1, "d-flex", "app-container", "w-100"], [1, "side-bar"], [1, "w-100", "main-container"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-side-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-top-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_shared_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__["TopBarComponent"], _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_2__["SideBarComponent"], _shared_top_nav_bar_top_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopNavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'CorporateClient';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "TAAU":
/*!*****************************************************!*\
  !*** ./src/app/shared/top-bar/top-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TopBarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.userDetails.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx_r0.userDetails.profilePictureURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
class TopBarComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.userService.getUserProfile().subscribe((res) => {
            this.userDetails = res;
            localStorage['userId'] = this.userDetails.id;
        }, err => {
            console.log(err);
        });
    }
    onLogout() {
        localStorage.removeItem('token');
        this.router.navigate(['/user/login']);
    }
}
TopBarComponent.??fac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
TopBarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 13, vars: 5, consts: [[1, "title-bar", "d-flex", "justify-content-between", "fixed-top", "navbar-expand-sm", "purple"], ["src", "https://c.keka.com/static/images/logos/KekaLogoWhite.png", "alt", "keka logo", 1, "keka-logo"], [1, "text-white", "pt-2"], [1, "d-flex", "cursor-pointer"], [1, "px-2", "pt-1"], ["aria-hidden", "true", 1, "fa", "fa-sun-o", "text-white", "px-2", "pt-2"], [1, "top-menu"], ["class", "d-flex px-2 cursor-pointer", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 4, "ngIf"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "btn", "p-0", "px-1", 3, "click"], ["id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "d-flex", "px-2", "cursor-pointer"], [1, "pt-1"], [1, "user-image", "ml-3", "rounded-circle", 3, "src"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, TopBarComponent_div_9_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TopBarComponent_Template_div_click_11_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](6, 2, ctx.currentDate, "d MMM yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.userDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "Tj/N":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(args) {
        this.id = +args.id;
        this.fullName = args.fullName;
        this.userName = args.userName;
        this.email = args.email;
        this.password = args.passwords.password;
        this.profilePictureURL = args.profilePictureURL;
        this.position = args.position;
        this.company = args.company;
        this.location = args.location;
    }
}


/***/ }),

/***/ "UcdY":
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class QuestionService {
    constructor(route) {
        this.route = route;
        this.baseURL = "/api/question/";
    }
    getQuestionsActivity() {
        return this.route.get(this.baseURL + "activities");
    }
    getQuestionsAnswered(id) {
        return this.route.get(this.baseURL + "getAnsweredQuestions/" + id);
    }
}
QuestionService.??fac = function QuestionService_Factory(t) { return new (t || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
QuestionService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: QuestionService, factory: QuestionService.??fac, providedIn: 'root' });


/***/ }),

/***/ "Z3hW":
/*!******************************************************************!*\
  !*** ./src/app/user-profiles/user-cards/user-cards.component.ts ***!
  \******************************************************************/
/*! exports provided: UserCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardsComponent", function() { return UserCardsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-card/user-card.component */ "+ulX");







function UserCardsComponent_app_user_card_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "app-user-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function UserCardsComponent_app_user_card_9_Template_app_user_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r2.showUser(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("user", user_r1);
} }
class UserCardsComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            searchUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.userService.getAllUserProfiles().subscribe(data => {
            this.users = data;
            this.filteredUsers = data;
        });
    }
    showUser(user) {
        this.router.navigate(["dashboard/users/" + user.id]);
    }
    filterUsers() {
        this.filteredUsers = this.users.filter(user => user.userName.toLowerCase().match(this.userFilter.value['searchUser']));
    }
}
UserCardsComponent.??fac = function UserCardsComponent_Factory(t) { return new (t || UserCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UserCardsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: UserCardsComponent, selectors: [["app-user-cards"]], decls: 10, vars: 2, consts: [[1, "border", "px-3", "py-2", "m-0"], [1, "form-group", 3, "formGroup"], [1, "form-control", "border", "col-md-3", "d-flex", "p-0"], ["aria-hidden", "true", 1, "fa", "fa-search", "my-auto", "pl-2"], ["type", "text", "placeholder", "Search", "formControlName", "searchUser", 1, "form-control", "border-0", "w-100", "h-75", "my-auto", 3, "keyup"], [1, "d-flex", "flex-wrap"], ["class", "cursor-pointer", 3, "user", "click", 4, "ngFor", "ngForOf"], [1, "cursor-pointer", 3, "user", "click"]], template: function UserCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("keyup", function UserCardsComponent_Template_input_keyup_6_listener() { return ctx.filterUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, UserCardsComponent_app_user_card_9_Template, 1, 1, "app-user-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.userFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.filteredUsers);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_5__["UserCardComponent"]], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-moment */ "QUrN");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-editor */ "bEYa");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/login/login.component */ "+rn0");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/registration/registration.component */ "PPYe");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.interceptor */ "D/Jk");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared */ "M0ag");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _home_filter_filter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/filter/filter.component */ "K8ly");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./categories/categories.component */ "IhOl");
/* harmony import */ var _categories_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./categories/category-card/category-card.component */ "uVMK");
/* harmony import */ var _home_answers_answers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/answers/answers.component */ "uYsv");
/* harmony import */ var _user_profiles_user_profiles_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-profiles/user-profiles.component */ "j9+d");
/* harmony import */ var _user_profiles_user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-profiles/user-cards/user-cards.component */ "Z3hW");
/* harmony import */ var _user_profiles_user_cards_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user-profiles/user-cards/user-card/user-card.component */ "+ulX");
/* harmony import */ var _home_display_profile_display_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/display-profile/display-profile.component */ "wJeZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ "fXoL");





























class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_26__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_26__["????defineInjector"]({ providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
            multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot({
                progressBar: true
            }),
            ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
        _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationComponent"],
        _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
        _shared__WEBPACK_IMPORTED_MODULE_15__["TopBarComponent"],
        _shared__WEBPACK_IMPORTED_MODULE_15__["TopNavBarComponent"],
        _shared__WEBPACK_IMPORTED_MODULE_15__["SideBarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _home_filter_filter_component__WEBPACK_IMPORTED_MODULE_18__["FilterComponent"],
        _categories_categories_component__WEBPACK_IMPORTED_MODULE_19__["CategoriesComponent"],
        _categories_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_20__["CategoryCardComponent"],
        _home_answers_answers_component__WEBPACK_IMPORTED_MODULE_21__["AnswersComponent"],
        _user_profiles_user_profiles_component__WEBPACK_IMPORTED_MODULE_22__["UserProfilesComponent"],
        _user_profiles_user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_23__["UserCardsComponent"],
        _user_profiles_user_cards_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_24__["UserCardComponent"],
        _home_display_profile_display_profile_component__WEBPACK_IMPORTED_MODULE_25__["DisplayProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
        ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"]] }); })();


/***/ }),

/***/ "cPV5":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CategoryService {
    constructor(route) {
        this.route = route;
        this.baseURL = "/api/category/";
    }
    addCategory(category) {
        return this.route.post(this.baseURL + "add", category);
    }
    getCategoriesActivity() {
        return this.route.get(this.baseURL + "activities");
    }
}
CategoryService.??fac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoryService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: CategoryService, factory: CategoryService.??fac, providedIn: 'root' });


/***/ }),

/***/ "czPe":
/*!********************************************!*\
  !*** ./src/app/services/answer.service.ts ***!
  \********************************************/
/*! exports provided: AnswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerService", function() { return AnswerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class AnswerService {
    constructor(route) {
        this.route = route;
        this.baseURL = "/api/answer/";
    }
    getAnswersActivity(questionId) {
        return this.route.get(this.baseURL + "activities/" + questionId);
    }
    addAnswer(answer) {
        return this.route.post(this.baseURL + "add", answer);
    }
}
AnswerService.??fac = function AnswerService_Factory(t) { return new (t || AnswerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AnswerService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AnswerService, factory: AnswerService.??fac, providedIn: 'root' });


/***/ }),

/***/ "gYzK":
/*!*************************************************************!*\
  !*** ./src/app/shared/top-nav-bar/top-nav-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: TopNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavBarComponent", function() { return TopNavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/dashboard/home"]; };
const _c1 = function () { return ["/dashboard/categories"]; };
const _c2 = function () { return ["/dashboard/users"]; };
class TopNavBarComponent {
    constructor() { }
}
TopNavBarComponent.??fac = function TopNavBarComponent_Factory(t) { return new (t || TopNavBarComponent)(); };
TopNavBarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TopNavBarComponent, selectors: [["app-top-nav-bar"]], decls: 11, vars: 6, consts: [[1, "list-unstyled", "top-nav", "nav"], ["routerLinkActive", "active", 1, "list-inline-item", "pt-2", 3, "routerLink"], [1, "top-nav-link", "pl-3", "pb-2", "pr-4"]], template: function TopNavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " CATEGORIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " USERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], encapsulation: 2 });


/***/ }),

/***/ "j9+d":
/*!**********************************************************!*\
  !*** ./src/app/user-profiles/user-profiles.component.ts ***!
  \**********************************************************/
/*! exports provided: UserProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesComponent", function() { return UserProfilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class UserProfilesComponent {
    constructor() { }
}
UserProfilesComponent.??fac = function UserProfilesComponent_Factory(t) { return new (t || UserProfilesComponent)(); };
UserProfilesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UserProfilesComponent, selectors: [["app-user-profiles"]], decls: 1, vars: 0, template: function UserProfilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "qRNK":
/*!********************************************!*\
  !*** ./src/app/auth/role-guard.service.ts ***!
  \********************************************/
/*! exports provided: RoleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardService", function() { return RoleGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RoleGuardService {
    constructor() { }
    roleGuard(allowedRoles) {
        var isMatch = false;
        var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
        var userRole = payLoad.role;
        allowedRoles.forEach((element) => {
            if (userRole == element) {
                isMatch = true;
                return false;
            }
        });
        return isMatch;
    }
}
RoleGuardService.??fac = function RoleGuardService_Factory(t) { return new (t || RoleGuardService)(); };
RoleGuardService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: RoleGuardService, factory: RoleGuardService.??fac, providedIn: 'root' });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UserService {
    constructor(http) {
        this.http = http;
        this.BaseURL = '/api/users/';
    }
    register(user) {
        return this.http.post(this.BaseURL + 'register', user);
    }
    login(formData) {
        return this.http.post(this.BaseURL + 'login', formData);
    }
    getUserProfile() {
        return this.http.get(this.BaseURL + 'userProfile');
    }
    getAllUserProfiles() {
        return this.http.get(this.BaseURL + 'all');
    }
    getUserProfileById(id) {
        return this.http.get(this.BaseURL + id);
    }
}
UserService.??fac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: UserService, factory: UserService.??fac, providedIn: 'root' });


/***/ }),

/***/ "uVMK":
/*!*********************************************************************!*\
  !*** ./src/app/categories/category-card/category-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryCardComponent", function() { return CategoryCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CategoryCardComponent {
    constructor() { }
}
CategoryCardComponent.??fac = function CategoryCardComponent_Factory(t) { return new (t || CategoryCardComponent)(); };
CategoryCardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CategoryCardComponent, selectors: [["app-category-card"]], inputs: { category: "category" }, decls: 10, vars: 5, consts: [[1, "border", "p-3", "bg-white", "my-2"], [1, "d-flex"], [1, "ml-auto"], [1, "font-size-14", "text-secondary"], [1, "font-size-12", "text-secondary"]], template: function CategoryCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.category.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("(", ctx.category.totalQuestions, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.category.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" Tagged ", ctx.category.taggedThisWeek, " this week, ", ctx.category.taggedThisMonth, " this month ");
    } }, encapsulation: 2 });


/***/ }),

/***/ "uYsv":
/*!***************************************************!*\
  !*** ./src/app/home/answers/answers.component.ts ***!
  \***************************************************/
/*! exports provided: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersComponent", function() { return AnswersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-editor */ "bEYa");
/* harmony import */ var _models_answer_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/answer.model */ "8erQ");
/* harmony import */ var _services_answer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/answer.service */ "czPe");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/activity.service */ "3ROY");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-moment */ "QUrN");












function AnswersComponent_div_19_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function AnswersComponent_div_19_div_18_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const answer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.changeBestAnswer(answer_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Mark as Best solution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const answer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", answer_r2.isBestAnswer);
} }
const _c0 = function (a0) { return { "text-success": a0 }; };
const _c1 = function (a0) { return { "text-danger": a0 }; };
function AnswersComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "amTimeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AnswersComponent_div_19_Template_i_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const answer_r2 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.likeAnswer(answer_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AnswersComponent_div_19_Template_i_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const answer_r2 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r10.dislikeAnswer(answer_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, AnswersComponent_div_19_div_18_Template, 4, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const answer_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", answer_r2.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](answer_r2.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 9, answer_r2.dateCreated));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c0, answer_r2.likes != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](answer_r2.likes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c1, answer_r2.dislikes != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](answer_r2.dislikes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", answer_r2.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.displayQuestion.userId == ctx_r0.loggedUser);
} }
function AnswersComponent_label_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Add Answer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c2 = function (a0) { return { "expand-editor": a0 }; };
class AnswersComponent {
    constructor(answerService, activityService, toastr) {
        this.answerService = answerService;
        this.activityService = activityService;
        this.toastr = toastr;
        this.refreshQuestions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editor = new ngx_editor__WEBPACK_IMPORTED_MODULE_2__["Editor"];
        this.expand = false;
        this.toolbar = [
            [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
            ['bold', 'italic', 'underline'],
            ['ordered_list', 'bullet_list'],
            ['blockquote', 'link']
        ];
        this.answerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.loggedUser = +localStorage['userId'];
    }
    ngOnChanges() {
        this.loadAnswers();
    }
    loadAnswers() {
        this.answerService.getAnswersActivity(this.displayQuestion.id).subscribe(data => this.answers = data);
    }
    expandEditor() {
        this.expand = !this.expand;
    }
    submitAnswer() {
        if (this.answerForm.valid) {
            var newAnswer = new _models_answer_model__WEBPACK_IMPORTED_MODULE_3__["Answer"]({});
            newAnswer.description = this.answerForm.value.description;
            newAnswer.questionId = this.displayQuestion.id;
            this.answerService.addAnswer(newAnswer).subscribe(data => {
                if (data != 0) {
                    this.toastr.success("answer Added");
                    this.loadAnswers();
                    this.editor.setContent('');
                }
                else {
                    this.toastr.error("Answer not added");
                    this.editor.setContent('');
                }
            }, err => {
                this.toastr.error("Adding answer Failed");
                console.log(err);
            });
        }
    }
    likeAnswer(answerId) {
        this.activityService.addLike(localStorage['userId'], answerId).subscribe(data => {
            if (data != 0) {
                this.loadAnswers();
            }
        }, err => {
            console.log(err);
        });
    }
    dislikeAnswer(answerId) {
        this.activityService.addDislike(localStorage['userId'], answerId).subscribe(data => {
            if (data != 0) {
                this.loadAnswers();
            }
        }, err => {
            console.log(err);
        });
    }
    changeBestAnswer(id) {
        this.activityService.updateBestAnswer(id).subscribe((data) => {
            this.refreshQuestions.emit(data);
            this.loadAnswers();
        });
    }
}
AnswersComponent.??fac = function AnswersComponent_Factory(t) { return new (t || AnswersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_answer_service__WEBPACK_IMPORTED_MODULE_4__["AnswerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_activity_service__WEBPACK_IMPORTED_MODULE_5__["ActivityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
AnswersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AnswersComponent, selectors: [["app-answers"]], inputs: { displayQuestion: "displayQuestion" }, outputs: { refreshQuestions: "refreshQuestions" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]], decls: 30, vars: 17, consts: [[1, "border"], [1, "selected-question", "pb-4", "pt-3", "pl-3"], [1, "d-flex", "justify-content-between"], [1, "d-flex"], [1, "avatar-image", "rounded-circle", "profile-pic-min", 3, "src"], [1, "ml-2", "text-black"], [1, "ml-2", "text-secondary"], [1, "mr-3", "btn"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-circle", "text-danger"], [1, "font-size-14"], [1, "text-secondary", "text-small", "font-size-14", 3, "innerHTML"], [1, "bg-gray", "pl-3", "py-2", "border"], ["class", "pl-3 pt-3", 4, "ngFor", "ngForOf"], [1, "form-group", "editor", "mt-2"], [1, "answer-form", 3, "formGroup"], [1, "NgxEditor__Wrapper"], [1, "d-flex", "justify-content-end", "bg-gray", "py-1"], ["aria-hidden", "true", 1, "fa", "fa-expand", "text-secondary", "fa-2x", 3, "click"], ["editable", "true", "placeholder", "Enter Answer", "formControlName", "description", 3, "editor", "ngClass"], [3, "editor", "toolbar"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane", "ml-auto", "mr-2", "fa-2x", "text-secondary", 3, "click"], ["class", "text-danger", 4, "ngIf"], [1, "pl-3", "pt-3"], [1, "rounded-circle", "profile-pic-min", 3, "src"], [1, "ml-2"], ["aria-hidden", "true", 1, "fa", "fa-thumbs-o-up", "mr-2", "mr-3", "text-secondary", "btn", "px-1", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-thumbs-o-down", "mr-2", "text-secondary", "btn", "px-1", 3, "ngClass", "click"], [1, "ml-5", "font-size-14", 3, "innerHTML"], ["class", "ml-5 d-flex form-group", 4, "ngIf"], [1, "ml-5", "d-flex", "form-group"], ["type", "checkbox", 1, "mt-1", 3, "checked", "change"], [1, "ml-2", "font-size-14"], [1, "text-danger"]], template: function AnswersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "amTimeAgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Report this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, AnswersComponent_div_19_Template, 19, 15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AnswersComponent_Template_i_click_24_listener() { return ctx.expandEditor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "ngx-editor", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "ngx-editor-menu", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AnswersComponent_Template_i_click_28_listener() { return ctx.submitAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, AnswersComponent_label_29_Template, 2, 0, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.displayQuestion.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.displayQuestion.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 13, ctx.displayQuestion.dateCreated));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.displayQuestion.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", ctx.displayQuestion.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Answers (", ctx.displayQuestion.noOfAnswers, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.answers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.answerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("editor", ctx.editor)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](15, _c2, ctx.expand));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("editor", ctx.editor)("toolbar", ctx.toolbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.answerForm.get("description").touched && ctx.answerForm.get("description").errors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ngx_editor__WEBPACK_IMPORTED_MODULE_2__["NgxEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], ngx_editor__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [ngx_moment__WEBPACK_IMPORTED_MODULE_8__["TimeAgoPipe"]], encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/categories.component */ "IhOl");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _user_profiles_user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profiles/user-cards/user-cards.component */ "Z3hW");
/* harmony import */ var _user_profiles_user_profiles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profiles/user-profiles.component */ "j9+d");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/login/login.component */ "+rn0");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/registration/registration.component */ "PPYe");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: '', redirectTo: '/user/login', pathMatch: 'full' },
    {
        path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
        children: [
            { path: 'registration', component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"] },
            { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] }
        ]
    },
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: 'categories', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"] },
            {
                path: 'users', component: _user_profiles_user_profiles_component__WEBPACK_IMPORTED_MODULE_6__["UserProfilesComponent"],
                children: [
                    { path: '', component: _user_profiles_user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_5__["UserCardsComponent"] },
                    { path: ':id', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
                ]
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wJeZ":
/*!*******************************************************************!*\
  !*** ./src/app/home/display-profile/display-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: DisplayProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayProfileComponent", function() { return DisplayProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "user-profile-link": a0 }; };
function DisplayProfileComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Questions Asked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Questions Answered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Questions Solved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DisplayProfileComponent_div_4_Template_a_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1.getUserAskedQuestions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " All Questions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DisplayProfileComponent_div_4_Template_a_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.getUserAnsweredQuestions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Answered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx_r0.user.profilePictureURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.user.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.user.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.user.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.user.likes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.user.dislikes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.user.noOfQuestionsAsked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.user.noOfQuestionsAnswered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.user.noOfQuestionsSolved);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c0, ctx_r0.askedQuestions));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c0, ctx_r0.answeredQuestions));
} }
class DisplayProfileComponent {
    constructor(route) {
        this.route = route;
        this.loadQuestions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.askedQuestions = true;
        this.answeredQuestions = false;
    }
    goBack() {
        this.route.navigate(['dashboard/users']);
    }
    getUserAskedQuestions() {
        this.askedQuestions = true;
        this.answeredQuestions = false;
        this.loadQuestions.emit("questionsAsked");
    }
    getUserAnsweredQuestions() {
        this.askedQuestions = false;
        this.answeredQuestions = true;
        this.loadQuestions.emit("questionsAnswered");
    }
}
DisplayProfileComponent.??fac = function DisplayProfileComponent_Factory(t) { return new (t || DisplayProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DisplayProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DisplayProfileComponent, selectors: [["app-display-profile"]], inputs: { user: "user" }, outputs: { loadQuestions: "loadQuestions" }, decls: 5, vars: 1, consts: [[1, "pt-2", "ml-3", "text-purple", "btn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left", "mr-2"], ["class", "border m-3 cursor-pointer", 4, "ngIf"], [1, "border", "m-3", "cursor-pointer"], [1, "d-flex", "p-3", "bg-white"], [1, "rounded-circle", "mr-3", "profile-pic", 3, "src"], [1, "mb-1"], [1, "font-size-14", "text-muted", "mb-0"], [1, "font-size-14", "text-muted"], [1, "d-flex", "align-items-center", "font-size-14"], ["aria-hidden", "true", 1, "fa", "fa-thumbs-up", "text-success", "mr-2"], [1, "mr-3"], ["aria-hidden", "true", 1, "fa", "fa-thumbs-down", "text-danger", "mr-2"], [1, "d-flex", "ml-4"], [1, "d-flex-column", "align-self-center", "bg-light-gray", "p-3", "mx-2"], [1, "pb-2", "text-center"], [1, "font-size-12", "text-muted"], [1, "d-flex-column", "align-self-center", "p-3", "mx-2", "bg-light-gray"], [1, "text-muted", "font-size-12"], [1, "bg-white", "d-flex", "border-top"], [1, "px-4", "py-3", "text-secondary", 3, "ngClass", "click"]], template: function DisplayProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DisplayProfileComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Back to users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DisplayProfileComponent_div_4_Template, 39, 15, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });


/***/ }),

/***/ "yObi":
/*!*******************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SideBarComponent {
    constructor() { }
}
SideBarComponent.??fac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(); };
SideBarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 5, vars: 0, consts: [[1, "list-unstyled", "side-bar", "h-100", "cursor-pointer"], [1, "m-0", "forum", "py-2"], ["aria-hidden", "true", 1, "fa", "fa-comments-o", "fa-3x"], [1, "font-size-14", "m-0"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Forum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map