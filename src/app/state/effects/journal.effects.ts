import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as journalActions from '../actions/journal.actions';
import { JournalService } from '../../services';

@Injectable()
export class JournalEffects {
  constructor(
    private actions$: Actions,
    private journalService: JournalService
  ) {}

  @Effect()
  loadJournal$ = this.actions$.pipe(
    ofType(journalActions.JournalActionTypes.LOAD),
    switchMap(({groupId, subjectId}) =>
      this.journalService.getJournal(groupId, subjectId).pipe(
        map(journal => new journalActions.LoadSuccess(journal)),
        catchError(err => of(new journalActions.LoadFail(err)))
      )
    )
  );
  @Effect()
  updateJournal$ = this.actions$.pipe(
    ofType(journalActions.JournalActionTypes.UPDATE),
    switchMap(({journalId, journal}) =>
      this.journalService.updateJournal(journalId, journal).pipe(
        map(() => new journalActions.LoadSuccess(journal)),
        catchError(err => of(new journalActions.LoadFail(err)))
      )
    )
  );
}
