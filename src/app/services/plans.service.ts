import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as config from '../config/config.json';
import {PlanSubject, Plan, Notes} from '../state/models';

@Injectable({
  providedIn: 'root'
})

export class PlansService {

  constructor(private http: HttpClient) {}

  getGroupPlans(groupId: number): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${config.API.GET_GROUP_PLANS}`);
  }

  postGroupPlans(plan: Plan): Observable<Plan[]> {
    return this.http.post<Plan[]>(config.API.POST_GROUP_PLANS, plan);
  }

  deleteGroupPlans(id: number): Observable<Plan[]> {
    return this.http.delete<Plan[]>(`${config.API.DELETE_GROUP_PLANS}/${id}`);
  }

  getPlanSubjects(planId: number): Observable<PlanSubject[]> {
    return this.http.get<PlanSubject[]>(`${config.API.GET_PLAN_SUBJECTS}`);
  }

  postPlanSubjects(planId: number, subject: PlanSubject): Observable<PlanSubject> {
    return this.http.post<PlanSubject>(`${config.API.POST_PLAN_SUBJECTS}/${planId}`, subject);
  }

  updatePlanSubjects(planId: number, subjectId: number, planSubject: PlanSubject): Observable<PlanSubject> {
    return this.http.put<PlanSubject>(`${config.API.UPDATE_PLAN_SUBJECTS}/${planId}/${subjectId}`, planSubject);
  }

  deletePlanSubjects(planId: number, subjectId: number): Observable<PlanSubject> {
    return this.http.delete<PlanSubject>(`${config.API.DELETE_PLAN_SUBJECTS}/${planId}/${subjectId}`);
  }
}
