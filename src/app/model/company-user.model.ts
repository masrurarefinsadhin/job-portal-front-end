import {UserType} from './user-type.model';
import {IndustryType} from './industry-type.model';

export interface ICompanyUserDto {
  id?: number;
  userId?: number;
  primaryEmail?: string;
  primaryContactNumber?: number;
  cratedAt?: Date;
  updatedAt?: Date;
  userType?: UserType;
  password?: string;
  previousPassword?: string;
  companyName?: string;
  timeOfEstablishment?: Date;
  maxNumberOfEmployee?: number;
  minNumberOfEmployee?: number;
  companyAddress?: string;
  industryType?: IndustryType;
  primaryPersonName?: string;
  primaryPersonDesignation?: string;
}

export class CompanyUserDto implements ICompanyUserDto {
  constructor(
    public id?: number,
    public userId?: number,
    public primaryEmail?: string,
    public primaryContactNumber?: number,
    public cratedAt?: Date,
    public updatedAt?: Date,
    public userType?: UserType,
    public password?: string,
    public previousPassword?: string,
    public companyName?: string,
    public timeOfEstablishment?: Date,
    public maxNumberOfEmployee?: number,
    public minNumberOfEmployee?: number,
    public companyAddress?: string,
    public industryType?: IndustryType,
    public primaryPersonName?: string,
    public primaryPersonDesignation?: string
  ) {}
}
