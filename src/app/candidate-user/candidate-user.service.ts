import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse } from '@angular/common/http';
import {ICompanyJobPostDto} from '../model/company-job-post.model';

@Injectable({providedIn: 'root'})
export class CandidateUserService {
  protected selectedJob: any;
  constructor(protected http: HttpClient) {
  }
  set setJobId(job: any) {
    this.selectedJob = job;
  }
  get getJobId(): any {
    return this.selectedJob;
  }

  createResume(resume:any ): Observable<HttpResponse<boolean>> {
    return this.http.post<boolean>("http://localhost:8080/common/candidate/create-resume", resume, { observe: 'response' });
  }
  getJobList(): Observable<HttpResponse<ICompanyJobPostDto[]>> {
    return this.http.get<ICompanyJobPostDto[]>("http://localhost:8080/common/candidate/get-job-list", { observe: 'response' });
  }

}
