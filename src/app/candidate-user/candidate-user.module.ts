import {NgModel} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CandidateUserComponent} from './candidate-user.component';
import {JobDetailComponent} from './job-detail/job-detail.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'dashboard',
      component: CandidateUserComponent
    },
    {
      path: 'job-detail',
      component: JobDetailComponent
    }
  ])],
  declarations: []
})
export class CandidateUserModule { }
