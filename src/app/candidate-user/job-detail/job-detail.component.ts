import { Component, OnInit } from '@angular/core';
import {CompanyJobPostDto, ICompanyJobPostDto} from '../../model/company-job-post.model';
import {SkillType} from '../../model/skill-type.model';
import {JobType} from '../../model/job-type.model';
import {JobLevel} from '../../model/job-level.model';
import {SalaryType} from '../../model/salary-type.model';
import {LunchFacilityType} from '../../model/lunch-facility.model';
import {SalaryReview} from '../../model/salary-review.model';
import {Workplace} from '../../model/work-place.model';
import * as moment from 'moment';
import {CandidateUserService} from '../candidate-user.service';
import Swal from 'sweetalert2';
import {Moment} from 'moment';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['../candidate-user.component.css']
})
export class JobDetailComponent implements OnInit {
  selectedJob = -1;
  jobPosting: ICompanyJobPostDto|null= null;
  monthNames: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  constructor(protected candidateUserService: CandidateUserService) { }

  ngOnInit(): void {
    console.log(this.candidateUserService.getJobId());
    this.candidateUserService.getJobPostById(
      localStorage.getItem('jobPostId') === null ? 0 : Number(localStorage.getItem('jobPostId'))
    ).subscribe((res) => {
      if (res.body !=null){
        this.jobPosting = res.body;
      }
      console.log(this.jobPosting);
    });
  }
  salaryTypeNegotiable(salaryType: SalaryType | undefined): boolean {
    return salaryType === SalaryType.NEGOTIABLE;
  }
  salaryTypeShow(salaryType: SalaryType | undefined): boolean {
    return salaryType === SalaryType.SHOW;
  }

  applyJob(): void {
    this.candidateUserService.applyJob(this.jobPosting?.id).subscribe((res) => {
      console.log(res.body);
      if (res.body){
        Swal.fire({
          title: 'Success',
          text: 'You have successfully applied for this job',
          icon: 'success',
          timer: 1500,
        })
      }
      else if(!res.body){
        Swal.fire({
          title: 'Error',
          text: 'You have already applied for this job',
          icon: 'error',
          timer: 1500
        })
      }
    });
  }
  convertToDay(deadline: | Moment|undefined):string {
    if (deadline !== undefined) {
      return  moment(deadline).format("D");
    }
    return "-1";
  }
  convertToMonth(deadline: | Moment|undefined):string {
    if (deadline !== undefined) {
      return  this.monthNames[Number.parseInt(moment(deadline).format("M"))];    }
    return "n/a";

  }
}
