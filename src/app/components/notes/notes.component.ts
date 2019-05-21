import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../../state/state';
import * as notesActions from '../../state/actions/notes.actions';
import { Column } from '../../constants/constants';
import { getNotes } from '../../state/selectors/notes.selectors';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesComponent implements OnInit {
  public notesActions = notesActions;
  public columns: Column[];
  public notes$ = this.store.select(getNotes);

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.columns = [
      { key: 'group', header: 'Группа', cell: row => `${row.group.name}` },
      { key: 'student', header: 'Студент', cell: row => `${row.student.name}` },
      {
        key: 'date_from',
        header: 'Тип пропуска',
        cell: row => `${row.date_from}`,
      },
      { key: 'date_to', header: 'Тип пропуска', cell: row => `${row.date_to}` },
    ];
  }
}
