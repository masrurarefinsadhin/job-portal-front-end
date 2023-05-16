import { Component, OnInit } from '@angular/core';
import {ICompanyJobPostDto} from '../../model/company-job-post.model';
import {SkillType} from '../../model/skill-type.model';
import {JobType} from '../../model/job-type.model';
import {JobLevel} from '../../model/job-level.model';
import {SalaryType} from '../../model/salary-type.model';
import {LunchFacilityType} from '../../model/lunch-facility.model';
import {SalaryReview} from '../../model/salary-review.model';
import {Workplace} from '../../model/work-place.model';
import * as moment from 'moment';
import {CandidateUserService} from '../candidate-user.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['../candidate-user.component.css']
})
export class JobDetailComponent implements OnInit {
  selectedJob = -1;
  jobPosting: ICompanyJobPostDto | null = null ;
  monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  constructor(protected candidateUserService: CandidateUserService) { }

  ngOnInit(): void {
    console.log(this.candidateUserService.getJobId());
    this.candidateUserService.getJobPostById(this.candidateUserService.getJobId()).subscribe((res) => {
      this.jobPosting = res.body;
      console.log(this.jobPosting);
    });
  }
  salaryTypeNegotiable(salaryType: SalaryType | undefined): boolean {
    return salaryType === SalaryType.NEGOTIABLE;
  }
  salaryTypeShow(salaryType: SalaryType | undefined): boolean {
    return salaryType === SalaryType.SHOW;
  }

}
