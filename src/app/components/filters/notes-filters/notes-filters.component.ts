import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../../../state/state';

import {dispatchLoadAction} from '../../../utils/utils';
import {getGroups, getStudents} from '../../../state/selectors/app.selectors';

@Component({
  selector: 'app-notes-filters',
  templateUrl: './notes-filters.component.html',
  styleUrls: ['./notes-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesFiltersComponent {

  public filters: FormGroup;
  public dispatchLoadAction = dispatchLoadAction(this.store);
  public groups$ = this.store.select(getGroups);
  public students$ = this.store.select(getStudents);

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>
  ) {
    this.filters = this.formBuilder.group({
      group: [''],
      student: [''],
    });
  }

}
