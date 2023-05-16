import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse } from '@angular/common/http';
import {ICandidateUserDto} from '../model/candidate-user.model';
import {ICompanyUserDto} from '../model/company-user.model';

@Injectable({providedIn: 'root'})
export class LoginService {

  constructor(protected http: HttpClient) {}

  createJobPost(resume:any ): Observable<HttpResponse<boolean>> {
    return this.http.post<boolean>("http://localhost:8080/common/company/create-job-post", resume, { observe: 'response' });
  }

  loginCandidate(email: string, password: string) {
  }

  loginCompanyUser(email: string, password: string): Observable<HttpResponse<ICompanyUserDto>> {
    let params={
      email:email,
      password:password
    }
    return this.http.post<ICompanyUserDto>("http://localhost:8080/common/company/login", params, { observe: 'response' });
  }

  loginCandidateUser(email: string, password: string): Observable<HttpResponse<ICandidateUserDto>> {
    let params={
      email:email,
      password:password
    }
    return this.http.post<ICompanyUserDto>("http://localhost:8080/common/candidate/login", params, { observe: 'response' });
  }
}
