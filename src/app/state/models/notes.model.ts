import { Cause } from './cause.model';
import { Group } from './group.model';
import { Student } from './student.model';
export interface Notes {
  id: number;
  group: Group;
  student: Student;
  date_from: string;
  date_to: string;
  cause: Cause;
}
