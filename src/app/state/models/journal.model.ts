import { StudentMark } from './student-mark.model';

export interface Journal {
  id: number;
  studentMarks: StudentMark[];
}
