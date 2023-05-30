import { Component, OnInit } from '@angular/core';
import {CandidateUserService} from '../candidate-user.service';
@Component({
  selector: 'app-candidate-stat',
  templateUrl: './candidate-stat.component.html',
  styleUrls: ['./candidate-stat.component.css']
})
export class CandidateStatComponent implements OnInit {
  private vacancyChart: any;

  constructor(protected candidateUserService: CandidateUserService) {

  }

  ngOnInit(): void {
    //this.createVacancyChart();
  }


}
