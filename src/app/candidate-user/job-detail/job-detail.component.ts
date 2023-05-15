import { Component, OnInit } from '@angular/core';
import {ICompanyJobPostDto} from '../../model/company-job-post.model';
import {SkillType} from '../../model/skill-type.model';
import {JobType} from '../../model/job-type.model';
import {JobLevel} from '../../model/job-level.model';
import {SalaryType} from '../../model/salary-type.model';
import {LunchFacilityType} from '../../model/lunch-facility.model';
import {SalaryReview} from '../../model/salary-review.model';
import {Workplace} from '../../model/work-place.model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['../candidate-user.component.css']
})
export class JobDetailComponent implements OnInit {

  jobPosting: ICompanyJobPostDto | undefined;
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
  constructor() { }

  ngOnInit(): void {
    this.jobPosting = {
      id: 1,
      companyId: 1,
      jobTitle: 'Software Engineer',
      vacancy: 2,
      requiredSkill: SkillType.IT,
      jobType: JobType.FULL_TIME,
      deadline: new Date(),
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
    };
  }
  salaryTypeNegotiable(salaryType: SalaryType | undefined): boolean {
    return salaryType === SalaryType.NEGOTIABLE;
  }
  salaryTypeShow(salaryType: SalaryType | undefined): boolean {
    return salaryType === SalaryType.SHOW;
  }

}
