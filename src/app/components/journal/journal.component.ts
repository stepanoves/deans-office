import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {getGroupPlans, getPlanSubjects} from '../../state/selectors/plan.selectors';
import {Store} from '@ngrx/store';

import {State} from '../../state/state';
import {dispatchLoadAction} from '../../utils/utils';
import {getGroups} from '../../state/selectors/app.selectors';
import * as planActions from '../../state/actions/plan.actions';
import * as journalActions from '../../state/actions/journal.actions';
import * as appActions from '../../state/actions/app.actions';
import {getJournal} from '../../state/selectors/journal.selectors';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalComponent implements OnInit, OnDestroy {

  public groupPlans$ = this.store.select(getGroupPlans);
  public dispatchLoadAction = dispatchLoadAction(this.store);
  public groups$ = this.store.select(getGroups);
  public planSubjects$ = this.store.select(getPlanSubjects);
  public journal$ = this.store.select(getJournal);
  public searchPlanForm: FormGroup;
  public displayedColumns: string[] = ['student', 'mark'];
  public journalForUpdate = {};

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>
  ) {
  }

  public ngOnInit(): void {
    this.store.dispatch(new planActions.Load());
    this.store.dispatch(new planActions.LoadPlanSubjects());
    this.store.dispatch(new journalActions.Load({planId: 1, subjectId: 2}));
    this.store.dispatch(new appActions.ChangeVisible(false));
    this.searchPlanForm = this.formBuilder.group({
      group: [''],
      semester: [''],
      year: ['']
    });
    this.journal$.subscribe(data => this.journalForUpdate = data);
  }

  public ngOnDestroy(): void {
    this.store.dispatch(new appActions.ChangeVisible(true));
  }

  public update(): void {
    console.log(this.journalForUpdate);
  }

}
