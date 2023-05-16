import {BloodGroup} from './blood-group.model';
import {ReligionType} from './religion.model';
import {MaritalStatus} from './marital-status.model';
import {NationalityType} from './nationality.model';

export interface IResume {
  id?: number;
  candidateUserId?: number;
  fatherName?: string;
  motherName?: string;
  presentAddress?: string;
  permanentAddress?: string;
  dateOfBirth?: string;
  nationalityType?: NationalityType;
  nationalIdNumber?: number;
  religionType?: ReligionType;
  maritalStatus?: MaritalStatus;
  secondaryContactNumber?: number;
  bloodGroup?: BloodGroup;
  secondaryEmail?: string;
}
export class Candidate implements IResume {
  constructor(
    public id?: number,
    public candidateUserId?: number,
    public fatherName?: string,
    public motherName?: string,
    public presentAddress?: string,
    public permanentAddress?: string,
    public dateOfBirth?: string,
    public nationalityType?: NationalityType,
    public nationalIdNumber?: number,
    public religionType?: ReligionType,
    public maritalStatus?: MaritalStatus,
    public secondaryContactNumber?: number,
    public bloodGroup?: BloodGroup,
    public secondaryEmail?: string
  ) {
  }
}
