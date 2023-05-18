import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateUserComponent } from './candidate-user/candidate-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { JobDetailComponent } from './candidate-user/job-detail/job-detail.component';
import { CreateResumeComponent } from './candidate-user/create-resume/create-resume.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CompanyUserComponent } from './company-user/company-user.component';
import { NavbarCompanyComponent } from './navbar-company/navbar-company.component';
import { PostJobComponent } from './company-user/post-job/post-job.component';
import { LoginComponent } from './login/login.component';
import { CandidateStatComponent } from './candidate-user/candidate-stat/candidate-stat.component';
import { JobPostHistoryComponent } from './company-user/job-post-history/job-post-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateUserComponent,
    NavbarComponent,
    JobDetailComponent,
    CreateResumeComponent,
    CompanyUserComponent,
    NavbarCompanyComponent,
    PostJobComponent,
    LoginComponent,
    CandidateStatComponent,
    JobPostHistoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
