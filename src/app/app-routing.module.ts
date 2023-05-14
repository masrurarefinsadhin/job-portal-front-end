import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'candidate-user',
    canActivate: [],
    loadChildren: () => import('./candidate-user/candidate-user.module').then(m => m.CandidateUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
