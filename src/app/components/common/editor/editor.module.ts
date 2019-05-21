import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatNativeDateModule, MatSelectModule,
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchSelectModule} from '../search-select/search-select.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditorComponent} from './editor.component';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [EditorComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EditorModule {}
