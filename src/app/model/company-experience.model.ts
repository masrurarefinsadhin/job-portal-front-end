export interface ICompanyExperienceDto {
  id?: number;
  minYearsOfExperience?: number;
  maxYearsOfExperience?: number;
  areaOfExpertise?: string;
  listOfSkill?: string;
}
export class CompanyExperienceDto implements ICompanyExperienceDto{
  constructor(
    public minYearsOfExperience?: number,
    public maxYearsOfExperience?: number,
    public areaOfExpertise?: string,
    public listOfSkill?: string,
    public id?: number
  ) {}
}
