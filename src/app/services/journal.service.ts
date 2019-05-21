import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as config from '../config/config.json';
import {Journal} from '../state/models';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private http: HttpClient) {
  }

  getJournal(planId: number, subjectId: number): Observable<Journal> {
    return this.http.get<Journal>(config.API.GET_JOURNAL);
  }

  updateJournal(journalId: number, journal: Journal): Observable<Journal> {
    return this.http.put<Journal>(`${config.API.UPDATE_JOURNAL}/${journalId}`, journal);
  }
}
