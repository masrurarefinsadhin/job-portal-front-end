import {SkillType} from './skill-type.model';
import {JobType} from './job-type.model';
import {JobLevel} from './job-level.model';
import {LunchFacilityType} from './lunch-facility.model';
import {SalaryReview} from './salary-review.model';
import {Workplace} from './work-place.model';
import {GenderType} from './gender.model';
import {SalaryType} from './salary-type.model';
export interface ICompanyJobPostDto {
  id?: any;
  companyId?: any;
  jobTitle?: string;
  vacancy?: number;
  requiredSkill?: SkillType;
  jobType?: JobType;
  deadline?: Date;
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
}
export class CompanyJobPostDto implements ICompanyJobPostDto {
  constructor(
    public id?: any,
    public companyId?: any,
    public jobTitle?: string,
    public vacancy?: number,
    public requiredSkill?: SkillType,
    public jobType?: JobType,
    public deadline?: Date,
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
    public ageMax?: number
  ) {}
}

