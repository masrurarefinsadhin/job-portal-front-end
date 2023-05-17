import { Moment } from 'moment';
import {DegreeType} from './degree-type.model';

export interface ICandidateEducation {
  id?: number;
  degreeName?: string;
  degreeType?: DegreeType;
  instituteName?: string;
  instituteAddress?: string;
  boardName?: string;
  startDate?: Moment;
  endDate?: Moment;
  maxGrade?: number;
  achievedGrade?: number;
  description?: string;
  majorSubject?: string;
}

export class CandidateEducation implements ICandidateEducation {
  constructor(
    public id?: number,
    public degreeName?: string,
    public degreeType?: DegreeType,
    public instituteName?: string,
    public instituteAddress?: string,
    public boardName?: string,
    public startDate?: Moment,
    public endDate?: Moment,
    public maxGrade?: number,
    public achievedGrade?: number,
    public description?: string,
    public majorSubject?: string
  ) {}
}
