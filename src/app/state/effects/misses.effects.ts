import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as missesActions from '../actions/misses.actions';
import {MissesService} from '../../services';

@Injectable()
export class MissesEffects {
  constructor(
    private actions$: Actions,
    private missesService: MissesService,
  ) {}

  @Effect()
  loadMisses$ = this.actions$.pipe(
    ofType(missesActions.MissesActionTypes.LOAD),
    switchMap(() =>
      this.missesService.getMisses().pipe(
        map(misses => new missesActions.LoadSuccess(misses)),
        catchError(err => of(new missesActions.LoadFail(err)))
      )
    )
  );

  @Effect()
  addMisses$ = this.actions$.pipe(
    ofType(missesActions.MissesActionTypes.ADD),
    switchMap(misses =>
      this.missesService.postMisses(misses).pipe(
        map(() => new missesActions.AddSuccess(misses)),
        catchError(err => of(new missesActions.AddFail(err)))
      )
    )
  );

  @Effect()
  updateMisses$ = this.actions$.pipe(
    ofType(missesActions.MissesActionTypes.UPDATE),
    switchMap(({missesId, misses}) =>
      this.missesService.updateMisses(missesId, misses).pipe(
        map(() => new missesActions.UpdateSuccess(misses)),
        catchError(err => of(new missesActions.AddFail(err)))
      )
    )
  );

  @Effect()
  deleteMisses$ = this.actions$.pipe(
    ofType(missesActions.MissesActionTypes.DELETE),
    switchMap((missesId) =>
      this.missesService.deleteMisses(missesId).pipe(
        map(() => new missesActions.DeleteSuccess(missesId)),
        catchError(err => of({})))
      )
    );
}
