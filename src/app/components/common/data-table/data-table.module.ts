import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {PreloadingSpinnerModule} from '../preloading-spinner/preloading-spinner.module';
import {DataTableComponent} from './data-table.component';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    HttpClientModule,
    PreloadingSpinnerModule
  ],
  exports: [DataTableComponent]
})
export class DataTableModule { }
