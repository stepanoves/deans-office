import {Subject} from './subject.model';
import {Teacher} from './teacher.model';

export interface PlanSubject {
  id: number;
  subject: Subject;
  teacher: Teacher;
  hours: number;
  type: string;
  date: Date;
}
