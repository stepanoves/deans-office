import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';

import {getGroups, getStudents} from '../../../../../state/selectors/app.selectors';
import {getSelected} from '../../../../../state/selectors/notes.selectors';
import {State} from '../../../../../state/state';
import * as notesActions from '../../../../../state/actions/notes.actions';
import {briefInfo, causes} from '../../../../../constants/constants';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditNotesComponent implements OnInit {


  @Input() isEdit = false;

  public editNotesGroup: FormGroup;
  public students$ = this.store.select(getStudents);
  public selected$ = this.store.select(getSelected);
  public groups$ = this.store.select(getGroups);
  public addAction = notesActions.Add;
  public editAction = notesActions.Update;
  public preDispatch = ['LOAD_GROUPS', 'LOAD_STUDENTS'];
  public briefInfo = briefInfo.notes;
  public causes = causes;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.editNotesGroup = this.formBuilder.group({
      group: ['', Validators.required],
      student: [{ value: '', disabled: true }, Validators.required],
      cause: ['', Validators.required],
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required]
    });
  }

}
