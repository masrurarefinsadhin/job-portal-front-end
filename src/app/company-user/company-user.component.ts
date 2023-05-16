import { Component, OnInit } from '@angular/core';
import {CompanyUserUserService} from './company-user.service';
import {IResume} from '../model/resume.model';

@Component({
  selector: 'app-company-user',
  templateUrl: './company-user.component.html',
  styleUrls: ['./company-user.component.css']
})
export class CompanyUserComponent implements OnInit {
  listOfResume: IResume[] = [];
  constructor(protected companyUserUserService: CompanyUserUserService) { }

  ngOnInit(): void {
    this.companyUserUserService.getResumeList().subscribe((res) => {
      if (res.body !== null){
        this.listOfResume = res.body;
        console.log(this.listOfResume);
      }
    });
  }

  viewResumeDetails(id: number | undefined): void{
    console.log(id);
  }
}
