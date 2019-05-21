import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Column } from '../../constants/constants';
import * as missesActions from '../../state/actions/misses.actions';
import { getMisses } from '../../state/selectors/misses.selectors';
import { State } from '../../state/state';

@Component({
  selector: 'app-misses',
  templateUrl: './misses.component.html',
  styleUrls: ['./misses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissesComponent implements OnInit {
  public missesActions = missesActions;
  public columns: Column[];
  public misses$ = this.store.select(getMisses);

  constructor(private store: Store<State>) {}

  public ngOnInit(): void {
    this.columns = [
      {
        key: 'department',
        header: 'Кафедра',
        cell: row => `${row.department.name}`,
      },
      { key: 'year', header: 'Год', cell: row => `${row.year}` },
      { key: 'group', header: 'Группа', cell: row => `${row.group.name}` },
      { key: 'course', header: 'Курс', cell: row => `${row.course}` },
      { key: 'student', header: 'Студент', cell: row => `${row.student.name}` },
      {
        key: 'subject',
        header: 'Дисциплина',
        cell: row => `${row.subject.name}`,
      },
      {
        key: 'miss_type',
        header: 'Тип пропуска',
        cell: row => `${row.miss_type}`,
      },
      { key: 'date', header: 'Дата', cell: row => `${row.date}` },
      {
        key: 'quantity_hours',
        header: 'Кол-во часов',
        cell: row => `${row.quantity_hours}`,
      },
      {
        key: 'hour_cost',
        header: 'Стоимость часа',
        cell: row => `${row.hour_cost}`,
      },
      {
        key: 'teacher',
        header: 'Преподаватель',
        cell: row => `${row.teacher.name}`,
      },
      {
        key: 'teacher_rank',
        header: 'Статус',
        cell: row => `${row.teacher.rank}`,
      },
      {
        key: 'paided',
        header: 'Оплачено',
        cell: row => `${row.paided ? 'Да' : 'Нет'}`,
      },
      {
        key: 'worked',
        header: 'Отработано',
        cell: row => `${row.worked ? 'Да' : 'Нет'}`,
      },
      {
        key: 'foreigner',
        header: 'Иностранец',
        cell: row => `${row.foreigner ? 'Да' : 'Нет'}`,
      },
    ];
  }
}
