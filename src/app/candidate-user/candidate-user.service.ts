import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CandidateUserService {
  protected selectedJob: any;
  constructor() {
  }
  set setJobId(job: any) {
    this.selectedJob = job;
  }
  get getJobId(): any {
    return this.selectedJob;
  }
}
