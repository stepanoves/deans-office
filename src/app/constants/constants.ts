import { LoadGroups, LoadDepartments, LoadStudents, LoadTeachers, LoadSubjects } from './../state/actions/app.actions';
import {Notes} from '../state/models/notes.model';
import {Misses} from '../state/models/misses.model';
import {Load} from '../state/actions/plan.actions';
import {HttpHeaders} from "@angular/common/http";

export const lsTokenName = 'currentUser';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

export const popupConfig = {
  add: {
    maxWidth: '80vw',
    maxHeight: '90vh',
    height: '90%',
    width: '45%'
  },
  change: {
    maxWidth: '80vw',
    maxHeight: '90vh',
    height: '90%',
    width: '80%',
  }
};

export const briefInfo = {
  misses: [
    { label: 'Имя', propName: 'student.name'},
    { label: 'Дисциплина', propName: 'subject.name'},
    { label: 'Кол-во часов', propName: 'hours'},
  ],
  notes: [
    { label: 'Имя', propName: 'student.name'},
    { label: 'С', propName: 'dateFrom'},
    { label: 'По', propName: 'dateTo'},
  ],
  plans: [
    { label: 'Дисплина', propName: 'subject.name'},
    { label: 'Преподаватель', propName: 'teacher.name'},
    { label: 'Дата', propName: 'date'},
  ]
};

export const causes = [
  'нет',
  'справка о болезни',
  'соревнования',
  'оперотряд',
  'БРСМ',
  'по семейным обст.',
  'освоб. ОВР',
  'освоб. от физ-ры',
  'прочая'
];

export const DISPATCH_MAP = {
  LOAD_GROUPS: {
    action: LoadGroups,
    wasDispatched: false
  },
  LOAD_DEPARTMENTS: {
    action: LoadDepartments,
    wasDispatched: false
  },
  LOAD_STUDENTS: {
    action: LoadStudents,
    wasDispatched: false
  },
  LOAD_TEACHERS: {
    action: LoadTeachers,
    wasDispatched: false
  },
  LOAD_SUBJECTS: {
    action: LoadSubjects,
    wasDispatched: false
  },
  LOAD_PLANS: {
    action: Load,
    wasDispatched: false
  },
};

export interface Column {
  key: string;
  header: string;
  cell(col): any;
}

export enum StreamTypes {
  misses,
  notes
}
export type ModelType = Notes | Misses;

