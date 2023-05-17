import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse } from '@angular/common/http';
import {ICompanyJobPostDto} from '../model/company-job-post.model';

@Injectable({providedIn: 'root'})
export class CandidateUserService {
  protected selectedJob = -1;
  constructor(protected http: HttpClient) {
  }
  setJobId(job: number): void {
    this.selectedJob = job;
  }
  getJobId(): number {
    return this.selectedJob;
  }

  createResume(resume: any ): Observable<HttpResponse<boolean>> {
    return this.http.post<boolean>('http://localhost:8080/common/candidate/create-resume', resume, { observe: 'response' });
  }
  getJobList(): Observable<HttpResponse<ICompanyJobPostDto[]>> {
    return this.http.get<ICompanyJobPostDto[]>('http://localhost:8080/common/candidate/get-job-list', { observe: 'response' });
  }

  getJobPostById(jobId: number): Observable<HttpResponse<ICompanyJobPostDto>> {
    return this.http.get<ICompanyJobPostDto>('http://localhost:8080/common/candidate/get-job-post-by-id/' + jobId, { observe: 'response' });
  }

  applyJob(id: number | undefined): Observable<HttpResponse<boolean>>  {
    const params = {
      candidateUserId: localStorage.getItem('candidateUserId'),
      jobPostId: id
    };
    return this.http.post<boolean>('http://localhost:8080/common/candidate/apply-for-job', params, { observe: 'response' });
  }
}
