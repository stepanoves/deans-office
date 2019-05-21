import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { NotesService } from '../../services';
import * as notesActions from '../actions/notes.actions';

@Injectable()
export class NotesEffects {
  constructor(
    private actions$: Actions,
    private notesService: NotesService
  ) {}

  @Effect()
  loadNotes$ = this.actions$.pipe(
    ofType(notesActions.NotesActionTypes.LOAD),
    switchMap(() =>
      this.notesService.getNotes().pipe(
        map(notes => new notesActions.LoadSuccess(notes)),
        catchError(err => of(new notesActions.LoadFail(err)))
      )
    )
  );

  @Effect()
  addNotes$ = this.actions$.pipe(
    ofType(notesActions.NotesActionTypes.ADD),
    switchMap(notes =>
      this.notesService.postNotes(notes).pipe(
        map(() => new notesActions.AddSuccess(notes)),
        catchError(err => of(new notesActions.AddFail(err)))
      )
    )
  );

  @Effect()
  updateNotes$ = this.actions$.pipe(
    ofType(notesActions.NotesActionTypes.UPDATE),
    switchMap(({notesId, notes}) =>
      this.notesService.updateNotes(notesId, notes).pipe(
        map(() => new notesActions.UpdateSuccess(notes)),
        catchError(err => of(new notesActions.AddFail(err)))
      )
    )
  );

  @Effect()
  deleteNotes$ = this.actions$.pipe(
    ofType(notesActions.NotesActionTypes.DELETE),
    switchMap((notesId) =>
      this.notesService.deleteNotes(notesId).pipe(
        map(() => new notesActions.DeleteSuccess(notesId)),
        catchError(err => of({})))
    )
  );
}
