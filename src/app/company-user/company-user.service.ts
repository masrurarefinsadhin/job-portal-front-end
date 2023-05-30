import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse } from '@angular/common/http';
import {IResume} from '../model/resume.model';
import {CompanyJobPostDto, ICompanyJobPostDto} from '../model/company-job-post.model';

@Injectable({providedIn: 'root'})
export class CompanyUserUserService {

  constructor(protected http: HttpClient) {}

  createJobPost(circular: any ): Observable<HttpResponse<boolean>> {
    console.log( );
    return this.http.post<boolean>('http://localhost:8080/common/company/create-job-post', circular, { observe: 'response' });
  }

  getResumeList(): Observable<HttpResponse<IResume[]>>  {
    return this.http.get<IResume[]>('http://localhost:8080/common/company/get-resume-list', { observe: 'response' });
  }

  getJobList(companyUserId: Number ):Observable<HttpResponse<ICompanyJobPostDto[]>> {
    return this.http.get<ICompanyJobPostDto[]>('http://localhost:8080/common/company/get-posted-job/'+companyUserId, { observe: 'response' });
  }
}
