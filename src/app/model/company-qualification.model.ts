import {DegreeType} from './degree-type.model';

export interface ICompanyEducationQualification {
  id?: number;
  degreeName?: string;
  degreeType?: DegreeType;
  degreeTitle?: string;
  majorSubject?: string;
}
export class CompanyEducationQualificationDto implements ICompanyEducationQualification{
  constructor(
    public id?: number,
    public degreeName?: string,
    public degreeType?: DegreeType,
    public degreeTitle?: string,
    public majorSubject?: string
  ) {}
}
