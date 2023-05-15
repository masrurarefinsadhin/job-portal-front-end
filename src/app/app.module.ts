import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateUserComponent } from './candidate-user/candidate-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { JobDetailComponent } from './candidate-user/job-detail/job-detail.component';
import { CreateResumeComponent } from './candidate-user/create-resume/create-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateUserComponent,
    NavbarComponent,
    JobDetailComponent,
    CreateResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
