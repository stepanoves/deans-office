import { PreloadingSpinnerModule } from '../preloading-spinner/preloading-spinner.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
} from '@angular/material';
import { AutofocusDirective } from '../../../directives/autofocus.directive';
import { StopPropagationDirective } from '../../../directives/stop-propagation.directive';
import { FilterDataPipe } from '../../../pipes/filter-data.pipe';
import { SearchSelectComponent } from './search-select.component';

@NgModule({
  declarations: [
    SearchSelectComponent,
    AutofocusDirective,
    StopPropagationDirective,
    FilterDataPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    PreloadingSpinnerModule
  ],
  exports: [SearchSelectComponent]
})
export class SearchSelectModule {}
