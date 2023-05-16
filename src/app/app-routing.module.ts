import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from '../app/login/login.component';

const routes: Routes = [
  {
    path: 'candidate-user',
    canActivate: [],
    loadChildren: () => import('./candidate-user/candidate-user.module').then(m => m.CandidateUserModule)
  },
  {
    path: 'company-user',
    canActivate: [],
    loadChildren: () => import('./company-user/company-user.module').then(m => m.CompanyUserModule)
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
