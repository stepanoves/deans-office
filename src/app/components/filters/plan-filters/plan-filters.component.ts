import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { State } from '../../../state/state';
import { dispatchLoadAction } from '../../../utils/utils';
import { getGroups } from '../../../state/selectors/app.selectors';

@Component({
  selector: 'app-plan-filters',
  templateUrl: './plan-filters.component.html',
  styleUrls: ['./plan-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanFiltersComponent {
  public filters: FormGroup;
  public dispatchLoadAction = dispatchLoadAction(this.store);
  public groups$ = this.store.select(getGroups);

  constructor(private formBuilder: FormBuilder, private store: Store<State>) {
    this.filters = this.formBuilder.group({
      group: [''],
      semester: [''],
      year: [''],
    });
  }
}
