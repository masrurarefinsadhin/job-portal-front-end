import { Component, OnInit } from '@angular/core';
import {ICompanyJobPostDto} from '../../model/company-job-post.model';
import {Router} from '@angular/router';
import {CandidateUserService} from '../../candidate-user/candidate-user.service';
import {SkillType} from '../../model/skill-type.model';
import {JobType} from '../../model/job-type.model';
import * as moment from 'moment/moment';
import {JobLevel} from '../../model/job-level.model';
import {SalaryType} from '../../model/salary-type.model';
import {LunchFacilityType} from '../../model/lunch-facility.model';
import {SalaryReview} from '../../model/salary-review.model';
import {Workplace} from '../../model/work-place.model';
import {Moment} from 'moment/moment';
import {CompanyUserUserService} from '../company-user.service';

@Component({
  selector: 'app-job-post-history',
  templateUrl: './job-post-history.component.html',
  styleUrls: ['./job-post-history.component.css']
})
export class JobPostHistoryComponent implements OnInit {

  listOfJobPostings: ICompanyJobPostDto[] = [];
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
  constructor( protected router: Router, protected candidateUserService: CandidateUserService, protected companyUserService:CompanyUserUserService) {

  }


  ngOnInit(): void {

    /*this.candidateUserService.getJobList().subscribe(
      (res) => {
        if (res.body !== null){
          this.listOfJobPostings = res.body;
          console.log(this.listOfJobPostings);
        }

      });*/
    this.companyUserService.getJobList(
      localStorage.getItem('candidateUserId') === null ? 0 : Number(localStorage.getItem('candidateUserId'))
    ).subscribe((res)=>
    {
      if (res.body !== null){
        this.listOfJobPostings=res.body;

      }
    })
  }

  salaryTypeNegotiable(salaryType: SalaryType | undefined): boolean {
    return salaryType === SalaryType.NEGOTIABLE;
  }
  salaryTypeShow(salaryType: SalaryType | undefined): boolean {
    return salaryType === SalaryType.SHOW;
  }
  showJobDetail(id: number): void {
    this.candidateUserService.setJobId(id);
    localStorage.setItem('jobPostId', String(id));
    this.router.navigate(['/candidate-user/job-detail']);
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
