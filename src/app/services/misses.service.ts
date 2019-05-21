import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Misses } from '../state/models';
import * as config from '../config/config.json';

@Injectable({
  providedIn: 'root',
})
export class MissesService {
  constructor(private http: HttpClient) {
  }

  getMisses(): Observable<Misses[]> {
    return this.http.get<Misses[]>(config.API.GET_MISSES);
  }

  postMisses(misses: Misses): Observable<Misses[]> {
    return this.http.post<Misses[]>(config.API.POST_MISSES, misses);
  }

  updateMisses(missesId: number, misses: Misses): Observable<Misses[]> {
    return this.http.put<Misses[]>(
      `${config.API.UPDATE_MISSES}/${missesId}`,
      misses,
    );
  }

  deleteMisses(id: number): Observable<Misses[]> {
    return this.http.delete<Misses[]>(`${config.API.DELETE_MISSES}/${id}`);
  }
}
