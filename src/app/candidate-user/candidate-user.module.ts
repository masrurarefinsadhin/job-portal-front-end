import {NgModel} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CandidateUserComponent} from './candidate-user.component';
import {JobDetailComponent} from './job-detail/job-detail.component';
import {CreateResumeComponent} from './create-resume/create-resume.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'dashboard',
      component: CandidateUserComponent
    },
    {
      path: 'job-detail',
      component: JobDetailComponent
    },
    {
      path: 'create-resume',
      component: CreateResumeComponent
    }
  ])],
  declarations: []
})
export class CandidateUserModule { }
