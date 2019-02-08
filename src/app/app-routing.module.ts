import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { DatadumpComponent } from './dashboard/datadump/datadump.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ScoreComponent } from './dashboard/score/score.component';
import { ErrorComponent } from './common/error/error.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'healthdata', component: DatadumpComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'score', component: ScoreComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
