import { Student } from './student.model';
import { Group } from './group.model';
import { Department } from './department.model';

export interface Filters {
  department: Department;
  group: Group;
  student: Student;
  from: Date;
  to: Date;
}
