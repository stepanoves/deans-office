import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as config from './config/config.json';
import { Department } from './state/models/department.model';
import { Group } from './state/models/group.model';
import { Teacher } from './state/models/teacher.model';
import { Student } from './state/models/student.model';
import { Subject } from './state/models/subject.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getGroups(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(config.API.GET_ALL.GROUP);
  }

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(config.API.GET_ALL.DEPARTMENT);
  }

  getTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(config.API.GET_ALL.TEACHERS);
  }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(config.API.GET_ALL.STUDENTS);
  }

  getSubjects(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(config.API.GET_ALL.SUBJECTS);
  }
}
