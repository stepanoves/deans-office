import { Subject } from '../models/subject.model';
import { Student } from '../models/student.model';
import { Department } from '../models/department.model';
import { Action } from '@ngrx/store';
import { Group } from '../models/group.model';
import { Teacher } from 'src/app/state/models/teacher.model';

export enum AppActionTypes {
  'LOAD_GROUPS' = '[Any page] Load groups',
  'LOAD_GROUPS_SUCCESS' = '[Any page] Load groups success',
  'LOAD_GROUPS_FAIL' = '[Any page] Load groups fail',
  'LOAD_DEPARTMENTS' = '[Any page] Load departments',
  'LOAD_DEPARTMENTS_SUCCESS' = '[Any page] Load departments success',
  'LOAD_DEPARTMENTS_FAIL' = '[Any page] Load departments fail',
  'LOAD_TEACHERS' = '[Any page] Load teachers',
  'LOAD_TEACHERS_SUCCESS' = '[Any page] Load teachers success',
  'LOAD_TEACHERS_FAIL' = '[Any page] Load teachers fail',
  'LOAD_STUDENTS' = '[Any page] Load students',
  'LOAD_STUDENTS_SUCCESS' = '[Any page] Load students success',
  'LOAD_STUDENTS_FAIL' = '[Any page] Load students fail',
  'LOAD_SUBJECTS' = '[Any page] Load subjects',
  'LOAD_SUBJECTS_SUCCESS' = '[Any page] Load subjects success',
  'LOAD_SUBJECTS_FAIL' = '[Any page] Load subjects fail',
  'CHANGE_VISIBLE' = '[Any page] Any page journal',
}

export class ChangeVisible implements Action {
  readonly type = AppActionTypes.CHANGE_VISIBLE;

  constructor(readonly payload: boolean) {}
}


export class LoadGroups implements Action {
  readonly type = AppActionTypes.LOAD_GROUPS;

  constructor() {}
}

export class LoadGroupsSuccess implements Action {
  readonly type = AppActionTypes.LOAD_GROUPS_SUCCESS;

  constructor(readonly payload: Group[]) {}
}

export class LoadGroupsFail implements Action {
  readonly type = AppActionTypes.LOAD_GROUPS_FAIL;

  constructor() {}
}

export class LoadDepartments implements Action {
  readonly type = AppActionTypes.LOAD_DEPARTMENTS;

  constructor() {}
}

export class LoadDepartmentsSuccess implements Action {
  readonly type = AppActionTypes.LOAD_DEPARTMENTS_SUCCESS;

  constructor(readonly payload: Department[]) {}
}

export class LoadDepartmentsFail implements Action {
  readonly type = AppActionTypes.LOAD_DEPARTMENTS_FAIL;

  constructor() {}
}

export class LoadTeachers implements Action {
  readonly type = AppActionTypes.LOAD_TEACHERS;

  constructor() {}
}

export class LoadTeachersSuccess implements Action {
  readonly type = AppActionTypes.LOAD_TEACHERS_SUCCESS;

  constructor(readonly payload: Teacher[]) {}
}

export class LoadTeachersFail implements Action {
  readonly type = AppActionTypes.LOAD_TEACHERS_FAIL;

  constructor() {}
}

export class LoadStudents implements Action {
  readonly type = AppActionTypes.LOAD_STUDENTS;

  constructor() {}
}

export class LoadStudentsSuccess implements Action {
  readonly type = AppActionTypes.LOAD_STUDENTS_SUCCESS;

  constructor(readonly payload: Student[]) {}
}

export class LoadStudentsFail implements Action {
  readonly type = AppActionTypes.LOAD_STUDENTS_FAIL;

  constructor() {}
}

export class LoadSubjects implements Action {
  readonly type = AppActionTypes.LOAD_SUBJECTS;

  constructor() {}
}

export class LoadSubjectsSuccess implements Action {
  readonly type = AppActionTypes.LOAD_SUBJECTS_SUCCESS;

  constructor(readonly payload: Subject[]) {}
}

export class LoadSubjectsFail implements Action {
  readonly type = AppActionTypes.LOAD_SUBJECTS_FAIL;

  constructor() {}
}

export type AppActions =
  | LoadGroups
  | LoadGroupsSuccess
  | LoadGroupsFail
  | LoadDepartments
  | LoadDepartmentsSuccess
  | LoadDepartmentsFail
  | LoadTeachers
  | LoadTeachersSuccess
  | LoadTeachersFail
  | LoadStudents
  | LoadStudentsSuccess
  | LoadStudentsFail
  | LoadSubjects
  | LoadSubjectsSuccess
  | LoadSubjectsFail
  | ChangeVisible;
