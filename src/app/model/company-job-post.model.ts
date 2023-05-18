import {SkillType} from './skill-type.model';
import {JobType} from './job-type.model';
import {JobLevel} from './job-level.model';
import {LunchFacilityType} from './lunch-facility.model';
import {SalaryReview} from './salary-review.model';
import {Workplace} from './work-place.model';
import {GenderType} from './gender.model';
import {SalaryType} from './salary-type.model';
import {Moment} from 'moment';
import {ICompanyEducationQualification} from './company-qualification.model';
import {ICompanyExperienceDto} from './company-experience.model';
export interface ICompanyJobPostDto {
  id?: number;
  companyId?: number;
  jobTitle?: string;
  vacancy?: number;
  requiredSkill?: SkillType;
  jobType?: JobType;
  deadline?: Moment;
  context?: string;
  jobResponsibility?: string;
  jobLevel?: JobLevel;
  jobLocation?: string;
  maxSalary?: number;
  minSalary?: number;
  salaryType?: SalaryType;
  lunchFacilityType?: LunchFacilityType;
  salaryReview?: SalaryReview;
  numberOfYearlyBonus?: number;
  workplace?: Workplace;
  genderType?: GenderType;
  ageMin?: number;
  ageMax?: number;
  educationQualificationList?: ICompanyEducationQualification[];
  companyExperienceList?: ICompanyExperienceDto[];
}
export class CompanyJobPostDto implements ICompanyJobPostDto {
  constructor(
    public id?: number,
    public companyId?: number,
    public jobTitle?: string,
    public vacancy?: number,
    public requiredSkill?: SkillType,
    public jobType?: JobType,
    public deadline?: Moment,
    public context?: string,
    public jobResponsibility?: string,
    public jobLevel?: JobLevel,
    public jobLocation?: string,
    public maxSalary?: number,
    public minSalary?: number,
    public salaryType?: SalaryType,
    public lunchFacilityType?: LunchFacilityType,
    public salaryReview?: SalaryReview,
    public numberOfYearlyBonus?: number,
    public workplace?: Workplace,
    public genderType?: GenderType,
    public ageMin?: number,
    public ageMax?: number,
    public educationQualificationList?: ICompanyEducationQualification[],
    public companyExperienceList?: ICompanyExperienceDto[]
  ) {
  }
}

