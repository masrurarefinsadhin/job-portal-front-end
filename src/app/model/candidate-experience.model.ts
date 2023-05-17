import {Moment} from 'moment';
import {ExperienceType} from './experience-type.model';

export interface ICandidateExperience {
  id?: number;
  experienceType?: ExperienceType;
  experienceTitle?: string;
  companyName?: string;
  designation?: string;
  startDate?: Moment;
  endDate?: Moment;
  description?: string;
}

export class CandidateExperience implements ICandidateExperience {
  constructor(
    public id?: number,
    public experienceType?: ExperienceType,
    public experienceTitle?: string,
    public companyName?: string,
    public designation?: string,
    public startDate?: Moment,
    public endDate?: Moment,
    public description?: string
  ) {}
}
