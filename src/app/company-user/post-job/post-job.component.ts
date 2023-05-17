import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
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
import {DegreeType} from '../../model/degree-type.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  skillTypeValues: SkillType[] = [];
  jobTypeValues: JobType[] = [];
  jobLevelValues: JobLevel[] = [];
  salaryTypeValues: SalaryType[] = [];
  lunchFacilityTypeValues: LunchFacilityType[] = [];
  salaryReviewValues: SalaryReview[] = [];
  workplaceValues: Workplace[] = [];
  genderTypeValues: GenderType[] = [];
  maritalStatusValues: MaritalStatus[] = [];
  nationalityTypeValues: NationalityType[] = [];
  bloodGroupValues: BloodGroup[] = [];
  degreeTypeValues: DegreeType[] = [];


  constructor(private fb: FormBuilder, protected companyUserUserService: CompanyUserUserService) { }
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
    companyUserId: [],
    educationQualificationList: this.fb.array([]),
    companyExperienceList: this.fb.array([])});
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
    this.degreeTypeValues = Object.values(DegreeType);
    this.editForm.get('companyUserId')?.setValue(localStorage.getItem('companyUserId'));
  }

  onSubmit(): void {
    console.log(this.editForm.value);
    this.companyUserUserService.createJobPost(this.editForm.value).subscribe(
      (res) => {
        console.log(res.body);
        if (res.body) {
          Swal.fire({
            icon: 'success',
            title: 'Your job post has been saved',
            timer: 1500
          });
        }
          else if(!res.body){
            Swal.fire({
              icon: 'error',
              title: 'Your job post has not been saved',
              timer: 1500
            });
          }

      }
    );

    this.companyUserUserService.getResumeList().subscribe((res) => {
      console.log(res.body);
    });

  }

 get educationQualificationList(): FormArray {
    return this.editForm.get('educationQualificationList') as FormArray;
  }
  addEducationQualification(): void {
    let educationQualification = this.fb.group({
      id:[null],
      degreeName: [],
      degreeType: [],
      degreeTitle: [],
      majorSubject: []
    });
    this.educationQualificationList.push(educationQualification);

  }
  removeEducationQualification(i: number): void {
    this.educationQualificationList.removeAt(i);
  }
  get companyExperienceList(): FormArray {
    return this.editForm.get('companyExperienceList') as FormArray;
  }

  addCompanyExperience(): void {
    let companyExperience = this.fb.group({
      id:[null],
      minYearsOfExperience: [],
      maxYearsOfExperience: [],
      areaOfExpertise: [],
      listOfSkill: []
    });
    this.companyExperienceList.push(companyExperience);
  }
  removeCompanyExperience(i: number): void {
    this.companyExperienceList.removeAt(i);
  }


  /*   addEducationQualification(): void {
      this.educationQualificationList.push(this.createEducationQualification());
    }
    removeEducationQualification(i: number): void {
      this.educationQualificationList.removeAt(i);
    }

    get companyExperienceList(): FormArray {
      return this.editForm.get('companyExperienceList') as FormArray;
    }
    addCompanyExperience(): void {
      this.companyExperienceList.push(this.createCompanyExperience());
    }
    removeCompanyExperience(i: number): void {
      this.companyExperienceList.removeAt(i);
    }
    createEducationQualification(): FormGroup {
    return this.fb.group({
      degreeName: [],
      degreeType: [],
      degreeTitle: [],
      majorSubject: []
    });
  }
  createCompanyExperience(): FormGroup {
    return this.fb.group({
      minYearsOfExperience: [],
      maxYearsOfExperience: [],
      areaOfExpertise: [],
      listOfSkill: []
    });
  }

    */


  getCompanyExperienceFormControlName(index: number, controlName: string): string {
    return `companyExperienceList.${index}.${controlName}`;
  }

}
