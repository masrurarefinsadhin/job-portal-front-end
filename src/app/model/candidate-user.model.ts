import {GenderType} from './gender.model';
import {SkillType} from './skill-type.model';
import {UserType} from './user-type.model';

export interface ICandidateUserDto {
  candidateId?: number;
  userId?: number;
  firstName?: string;
  lastName?: string;
  primaryEmail?: string;
  password?: string;
  previousPassword?: string;
  primaryContactNumber?: number;
  genderType?: GenderType;
  skillType?: SkillType;
  cratedAt?: Date;
  updatedAt?: Date;
  userType?: UserType;
  currentAddress?: string;
}

export class CandidateUserDto implements ICandidateUserDto {
  constructor(
    public candidateId?: number,
    public userId?: number,
    public firstName?: string,
    public lastName?: string,
    public primaryEmail?: string,
    public password?: string,
    public previousPassword?: string,
    public primaryContactNumber?: number,
    public genderType?: GenderType,
    public skillType?: SkillType,
    public cratedAt?: Date,
    public updatedAt?: Date,
    public userType?: UserType,
    public currentAddress?: string
  ) {}
}
