import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse } from '@angular/common/http';
import {IResume} from '../model/resume.model';

@Injectable({providedIn: 'root'})
export class CompanyUserUserService {

  constructor(protected http: HttpClient) {}

  createJobPost(resume: any ): Observable<HttpResponse<boolean>> {
    return this.http.post<boolean>('http://localhost:8080/common/company/create-job-post', resume, { observe: 'response' });
  }

  getResumeList(): Observable<HttpResponse<IResume[]>>  {
    return this.http.get<IResume[]>('http://localhost:8080/common/company/get-resume-list', { observe: 'response' });
  }
}
