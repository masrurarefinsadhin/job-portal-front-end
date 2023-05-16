import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {NationalityType} from '../../model/nationality.model';
import {MaritalStatus} from '../../model/marital-status.model';
import {BloodGroup} from '../../model/blood-group.model';
import {ReligionType} from '../../model/religion.model';
import { CandidateUserService } from '../candidate-user.service';
import {HttpResponse,HttpClient, HttpClientModule } from '@angular/common/http';
import {CompanyUserUserService} from '../../company-user/company-user.service';

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.css']
})
export class CreateResumeComponent implements OnInit {

  nationalityTypeValues: NationalityType[]=[];
  maritalStatusValues: MaritalStatus[] = [];
  bloodGroupValues:BloodGroup[]=[];
  religionTypeValues: ReligionType[] = [];

  editForm = this.fb.group({
    id: [null],
    candidateUserId: [552],
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
    educationList: [null],
    experienceList: [null]
});

  constructor(private fb: FormBuilder,protected candidateUserService: CandidateUserService) { }

  ngOnInit(): void {
    this.nationalityTypeValues = Object.values(NationalityType);
    this.maritalStatusValues = Object.values(MaritalStatus);
    this.bloodGroupValues = Object.values(BloodGroup);
    this.religionTypeValues = Object.values(ReligionType);


  }
  onSubmit() {
    console.log(this.editForm.value);
    this.candidateUserService.createResume(this.editForm.value).subscribe(
      (res) => {
        console.log(res.body);
      }
    );
  }
}
