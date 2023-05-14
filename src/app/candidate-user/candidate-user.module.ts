import {NgModel} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CandidateUserComponent} from './candidate-user.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'new',
      component: CandidateUserComponent,
    }
  ])],
})
export class CandidateUserModule { }
