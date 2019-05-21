import { Cause } from './cause.model';
import { Subject } from './subject.model';
import { Department } from './department.model';
import { Group } from './group.model';
import { Student } from './student.model';
import { Teacher } from './teacher.model';

export interface Misses {
  id: number;
  department: Department;
  group: Group;
  student: Student;
  teacher: Teacher;
  subject: Subject;
  year: number;
  course: number;
  foreigner: boolean;
  miss_type: string;
  date: Date;
  quantity_hours: number;
  hour_cost: number;
  cause: Cause;
  paided: boolean;
  worked: boolean;
  worked_date: Date;
}
