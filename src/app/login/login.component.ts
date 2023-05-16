import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {UserType} from '../model/user-type.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string='';
  password: string= '';
  userType:string='candidate';


  constructor( protected router: Router, protected loginService: LoginService) {}

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userType=='company'){
      this.loginService.loginCompanyUser(this.email,this.password).subscribe(
        (res) => {
          console.log(res.body);
          if (res.body?.userType=== UserType.COMPANY){
            localStorage.setItem('companyUserId',res.body?.id!.toString());
            this.router.navigate(['/company-user/dashboard']);
          }
        });
    }
    else if (this.userType=='candidate'){
      this.loginService.loginCandidateUser(this.email,this.password).subscribe(
        (res) => {
          console.log(res.body);
          if (res.body?.userType=== UserType.CANDIDATE){
            localStorage.setItem('candidateUserId',res.body?.candidateId!.toString());
            this.router.navigate(['/candidate-user/dashboard']);
          }
        });
    }
  }
}
