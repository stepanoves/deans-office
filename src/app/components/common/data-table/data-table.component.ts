import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Column, ModelType } from '../../../constants/constants';
import { State } from '../../../state/state';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent implements OnInit, OnDestroy {
  @Input() cols: Column[];
  @Input() actionType: any;
  @Input() stream$: Observable<any>;

  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  private readonly destroy$ = new Subject<boolean>();

  public dataSource = new MatTableDataSource<ModelType>();
  public selection = new SelectionModel<ModelType>(true, []);

  constructor(private store: Store<State>) {}

  public ngOnInit(): void {
    this.cols = [{ key: 'select', header: null, cell: null }, ...this.cols];
    this.dataSource.paginator = this.matPaginator;
    this.store.dispatch(new this.actionType.Load());

    this.stream$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => (this.dataSource.data = data));

    this.store.dispatch(new this.actionType.ClearSelect());
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  public getHeaderRowDef(): string[] {
    return this.cols.map(col => col.key);
  }

  public masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  public updateSelect(): void {
    this.store.dispatch(
      new this.actionType.UpdateSelect(this.selection.selected),
    );
  }
}
