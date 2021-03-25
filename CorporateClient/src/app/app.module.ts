import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentModule } from 'ngx-moment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxEditorModule } from "ngx-editor";
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SideBarComponent, TopBarComponent, TopNavBarComponent } from './shared';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './home/filter/filter.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryCardComponent } from './categories/category-card/category-card.component';
import { AnswersComponent } from './home/answers/answers.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { UserCardsComponent } from './user-profiles/user-cards/user-cards.component';
import { UserCardComponent } from './user-profiles/user-cards/user-card/user-card.component';
import { DisplayProfileComponent } from './home/display-profile/display-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    TopBarComponent,
    TopNavBarComponent,
    SideBarComponent,
    HomeComponent,
    FilterComponent,
    CategoriesComponent,
    CategoryCardComponent,
    AnswersComponent,
    UserProfilesComponent,
    UserCardsComponent,
    UserCardComponent,
    DisplayProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    MomentModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxEditorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
