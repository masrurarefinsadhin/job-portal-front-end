import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {NationalityType} from '../../model/nationality.model';
import {MaritalStatus} from '../../model/marital-status.model';
import {BloodGroup} from '../../model/blood-group.model';
import {ReligionType} from '../../model/religion.model';
import { CandidateUserService } from '../candidate-user.service';
import Swal from 'sweetalert2';
import {DegreeType} from '../../model/degree-type.model';
import {ExperienceType} from '../../model/experience-type.model';
@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.css']
})
export class CreateResumeComponent implements OnInit {

  nationalityTypeValues: NationalityType[] = [];
  maritalStatusValues: MaritalStatus[] = [];
  bloodGroupValues: BloodGroup[] = [];
  religionTypeValues: ReligionType[] = [];

  editForm = this.fb.group({
    id: [null], candidateUserId: [],
  fatherName:  [],
  motherName: [],
  permanentAddress: [],
  presentAddress: [],
  dateOfBirth: [],
  nationalityType: [],
  nationalIdNumber: [],
  religionType: [],
  maritalStatus: [],
  secondaryContactNumber: [],
  bloodGroup: [],
  secondaryEmail: [],
    educationList: this.fb.array([]),
    experienceList: this.fb.array([])

  });
  degreeTypeValues: DegreeType[] = Object.values(DegreeType)
  experienceTypeValues: ExperienceType [] = Object.values(ExperienceType);

  constructor(private fb: FormBuilder, protected candidateUserService: CandidateUserService) { }

  ngOnInit(): void {
    this.nationalityTypeValues = Object.values(NationalityType);
    this.maritalStatusValues = Object.values(MaritalStatus);
    this.bloodGroupValues = Object.values(BloodGroup);
    this.religionTypeValues = Object.values(ReligionType);
    this.editForm.get('candidateUserId')?.setValue(localStorage.getItem('candidateUserId'));
  }
  get experienceList(): FormArray {
    return this.editForm.get('experienceList') as FormArray;
  }

  addExperience(): void {
    const experienceForm = this.fb.group({
      experienceType: [],
      experienceTitle: [],
      companyName: [],
      designation: [],
      startDate: [],
      endDate: [],
      description: []
    });

    this.experienceList.push(experienceForm);
  }

  removeExperience(index: number): void {
    this.experienceList.removeAt(index);
  }

  get educationList(): FormArray {
    return this.editForm.get('educationList') as FormArray;
  }

  addEducation(): void {
    const educationForm = this.fb.group({
      degreeName: [],
      degreeType: [],
      instituteName: [],
      instituteAddress: [],
      boardName: [],
      startDate: [],
      endDate: [],
      maxGrade: [],
      achievedGrade: [],
      description: [],
      majorSubject: []
    });

    this.educationList.push(educationForm);
  }

  removeEducation(index: number): void {
    this.educationList.removeAt(index);
  }


  onSubmit(): void {
    console.log(this.editForm.value);
    this.candidateUserService.createResume(this.editForm.value).subscribe(
      (res) => {
        if (res.body !== null && res.body){
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Resume Created Successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(r => {});
        }
        else if(res.body== false){
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Resume Creation Failed',
            timer: 1500
          }).then(r => {})
        }
      }
    );
  }
}
