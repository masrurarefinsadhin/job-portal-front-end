import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {CandidateUserService} from '../../candidate-user/candidate-user.service';
import { Component, OnInit } from '@angular/core';
import {SkillType} from '../../model/skill-type.model';
import {JobLevel} from '../../model/job-level.model';
import {SalaryType} from '../../model/salary-type.model';
import {LunchFacilityType} from '../../model/lunch-facility.model';
import {SalaryReview} from '../../model/salary-review.model';
import {Workplace} from '../../model/work-place.model';
import {GenderType} from '../../model/gender.model';
import {MaritalStatus} from '../../model/marital-status.model';
import {NationalityType} from '../../model/nationality.model';
import {BloodGroup} from '../../model/blood-group.model';
import {JobType} from '../../model/job-type.model';
import {CompanyUserUserService} from '../company-user.service';
@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  skillTypeValues:SkillType[] =[];
  jobTypeValues:JobType[] =[];
  jobLevelValues:JobLevel[] =[];
  salaryTypeValues:SalaryType[] =[];
  lunchFacilityTypeValues:LunchFacilityType[] =[];
  salaryReviewValues:SalaryReview[] =[];
  workplaceValues:Workplace[] =[];
  genderTypeValues:GenderType[] =[];
  maritalStatusValues:MaritalStatus[] =[];
  nationalityTypeValues:NationalityType[] =[];
  bloodGroupValues:BloodGroup[] =[];


  constructor(private fb: FormBuilder,protected companyUserUserService: CompanyUserUserService) { }
  editForm = this.fb.group({
    id: [],
    jobTitle: [],
    vacancy: [],
    requiredSkill: [],
    jobType: [],
    deadline: [],
    context: [],
    jobResponsibility: [],
    jobLevel: [],
    jobLocation: [],
    maxSalary: [],
    minSalary: [],
    salaryType: [],
    lunchFacilityType: [],
    salaryReview: [],
    numberOfYearlyBonus: [],
    workplace: [],
    genderType: [],
    ageMin: [],
    ageMax: [],
    companyUserId: []
  });
  ngOnInit(): void {
    this.skillTypeValues = Object.values(SkillType);
    this.jobTypeValues = Object.values(JobType);
    this.jobLevelValues = Object.values(JobLevel);
    this.salaryTypeValues = Object.values(SalaryType);
    this.lunchFacilityTypeValues = Object.values(LunchFacilityType);
    this.salaryReviewValues = Object.values(SalaryReview);
    this.workplaceValues = Object.values(Workplace);
    this.genderTypeValues = Object.values(GenderType);
    this.maritalStatusValues = Object.values(MaritalStatus);
    this.nationalityTypeValues = Object.values(NationalityType);
    this.bloodGroupValues = Object.values(BloodGroup);


  }

  onSubmit() {
    console.log(this.editForm.value);
    this.companyUserUserService.createJobPost(this.editForm.value).subscribe(
      (res) => {
        console.log(res.body);
      }
    );

  }
}
