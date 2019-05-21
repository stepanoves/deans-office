import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSelectCounterComponent } from './table-select-counter.component';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [TableSelectCounterComponent],
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  exports: [TableSelectCounterComponent]
})
export class TableSelectCounterModule { }
