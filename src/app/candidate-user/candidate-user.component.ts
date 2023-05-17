import {Component, OnInit} from '@angular/core';
import {ICompanyJobPostDto} from '../model/company-job-post.model';
import {Workplace} from '../model/work-place.model';
import {SalaryReview} from '../model/salary-review.model';
import {LunchFacilityType} from '../model/lunch-facility.model';
import {SalaryType} from '../model/salary-type.model';
import {JobLevel} from '../model/job-level.model';
import {JobType} from '../model/job-type.model';
import {SkillType} from '../model/skill-type.model';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';
import { CandidateUserService } from './candidate-user.service';
import * as moment from 'moment';
@Component({
  selector: 'app-candidate-user',
  templateUrl: './candidate-user.component.html',
  styleUrls: ['./candidate-user.component.css']
})
export class CandidateUserComponent implements OnInit {

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
  constructor( protected router: Router, protected candidateUserService: CandidateUserService) {

  }


  ngOnInit(): void {
    this.listOfJobPostings = [
      {
        id: 1,
        companyId: 1,
        jobTitle: 'Software Engineer',
        vacancy: 2,
        requiredSkill: SkillType.IT,
        jobType: JobType.FULL_TIME,
        deadline: moment(),
        context: 'This is a context',
        jobResponsibility: 'This is a job responsibility',
        jobLevel: JobLevel.MID_LEVEL,
        jobLocation: 'Dhaka',
        maxSalary: 100000,
        minSalary: 50000,
        salaryType: SalaryType.NEGOTIABLE,
        lunchFacilityType: LunchFacilityType.FULLY_SUBSIDIZED,
        salaryReview: SalaryReview.HALF_YEARLY,
        numberOfYearlyBonus: 2,
        workplace: Workplace.OFFICE,
        ageMax: 30,
        ageMin: 20,

      }
    ];
    this.candidateUserService.getJobList().subscribe(
      (res) => {

        if (res.body !== null){
          this.listOfJobPostings = res.body;
          console.log(this.listOfJobPostings);
        }

      });
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
}
