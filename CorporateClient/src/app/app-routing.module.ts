import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserCardsComponent } from './user-profiles/user-cards/user-cards.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch:'full' },
      { path: 'home', component: HomeComponent },
      { path: 'categories', component: CategoriesComponent },
      {
        path: 'users', component: UserProfilesComponent,
        children: [
          { path: '', component: UserCardsComponent },
          { path: ':id', component: HomeComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
