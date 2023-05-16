import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CandidateUserComponent} from '../candidate-user/candidate-user.component';
import {CompanyUserComponent} from './company-user.component';
import {PostJobComponent} from './post-job/post-job.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'dashboard',
      component: CompanyUserComponent
    },
    {
      path: 'post-job',
      component: PostJobComponent
    }
  ]) ],
  declarations: []
})
export class CompanyUserModule { }
