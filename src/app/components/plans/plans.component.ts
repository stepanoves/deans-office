import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { State } from '../../state/state';
import { Column } from '../../constants/constants';
import * as planActions from '../../state/actions/plan.actions';
import { getGroupPlans, getPlanSubjects } from '../../state/selectors/plan.selectors';
import { FormBuilder, FormGroup } from '@angular/forms';
import { dispatchLoadAction } from '../../utils/utils';
import { getGroups } from '../../state/selectors/app.selectors';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlansComponent implements OnInit {
  public planAction = planActions;
  public groupPlans$ = this.store.select(getGroupPlans);
  public planSubjects$ = this.store.select(getPlanSubjects);
  public columns: Column[];
  public addPlanForm: FormGroup;
  public dispatchLoadAction = dispatchLoadAction(this.store);
  public groups$ = this.store.select(getGroups);

  constructor(
    private store: Store<State>,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
  }

  public ngOnInit(): void {
    this.store.dispatch(new planActions.LoadPlanSubjects());
    this.store.dispatch(new planActions.Load());
    this.columns = [
      {
        key: 'subject',
        header: 'Дисциплина',
        cell: row => `${row.subject.name}`,
      },
      {
        key: 'teacher',
        header: 'Преподавтель',
        cell: row => `${row.teacher.name}`,
      },
      { key: 'hours', header: 'Количество часов', cell: row => `${row.hours}` },
      { key: 'type', header: 'Тип', cell: row => `${row.type}` },
      { key: 'date', header: 'Дата', cell: row => `${row.date}` },
    ];
    this.addPlanForm = this.formBuilder.group({
      group: [''],
      semester: [''],
      year: [''],
    });
  }
}
