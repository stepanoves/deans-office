import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Notes} from '../state/models';
import * as config from '../config/config.json';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) {}

  getNotes(): Observable<Notes[]> {
    return this.http.get<Notes[]>(config.API.GET_NOTES);
  }

  postNotes(note: Notes): Observable<Notes[]> {
    return this.http.post<Notes[]>(config.API.POST_NOTES, note);
  }

  updateNotes(noteId: number, note: Notes): Observable<Notes[]> {
    return this.http.put<Notes[]>(`${config.API.UPDATE_NOTES}/${note}`, note);
  }

  deleteNotes(id: number): Observable<Notes[]> {
    return this.http.delete<Notes[]>(`${config.API.DELETE_NOTES}/${id}`);
  }
}
