import {Store} from '@ngrx/store';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {dispatchLoadAction} from '../../../utils/utils';
import {getDepartments, getGroups, getStudents, getTeachers} from '../../../state/selectors/app.selectors';
import {State} from '../../../state/state';

@Component({
  selector: 'app-misses-filters',
  templateUrl: './misses-filters.component.html',
  styleUrls: ['./misses-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissesFiltersComponent {
  public filters: FormGroup;
  public dispatchLoadAction = dispatchLoadAction(this.store);
  public groups$ = this.store.select(getGroups);
  public departments$ = this.store.select(getDepartments);
  public students$ = this.store.select(getStudents);
  public teachers$ = this.store.select(getTeachers);

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>
  ) {
    this.filters = this.formBuilder.group({
      department: [''],
      teacher: [''],
      student: [{ value: '', disabled: true }],
      group: [''],
      dateFrom: [''],
      dateTo: ['']
    });
  }
}
