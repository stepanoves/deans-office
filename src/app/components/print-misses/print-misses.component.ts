import { State } from '../../state/state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { getSelected } from '../../state/selectors/misses.selectors';

@Component({
  selector: 'app-print-misses',
  templateUrl: './print-misses.component.html',
  styleUrls: ['./print-misses.component.scss']
})
export class PrintMissesComponent implements OnInit {

  selected$ = this.store.select(getSelected);
  tableHeaders = [
    'Вид учебной нагрузки',
    'Ф.И.О преподавателя, принимающего отработку',
    'Должность, ученая степень, звание',
    'Дисцплина',
    'Дата пропуска занятия',
    'Кол. про. часов',
    'Стоимость одного часа отрабоки',
    'Стоимость отрабоки'
  ];
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

}
