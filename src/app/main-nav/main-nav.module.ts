import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatStepperModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';

import { MainNavComponent } from './main-nav.component';
import { MainNavRoutingModule } from './main-nav.routing.module';
import { SearchSelectModule } from '../components/common/search-select/search-select.module';
import { FiltersModule } from '../components/common/filters/filters.module';
import { DataTableModule } from '../components/common/data-table/data-table.module';
import { EditorModule } from '../components/common/editor/editor.module';
import { PreloadingSpinnerModule } from '../components/common/preloading-spinner/preloading-spinner.module';
import {
  AddMissesComponent,
  AddNotesComponent,
  AddPlansComponent,
  AuthComponent,
  ChangeMissesComponent,
  ChangeNotesComponent,
  ChangePlansComponent,
  DialogPopupComponent,
  EditMissesComponent,
  EditNotesComponent,
  EditPlansComponent,
  HeaderMenuComponent,
  JournalComponent,
  MissesComponent,
  MissesFiltersComponent,
  NotesComponent,
  NotesFiltersComponent,
  PlanFiltersComponent,
  PlansComponent,
} from '../components';

const components = [
  AuthComponent,
  MissesFiltersComponent,
  NotesFiltersComponent,
  PlanFiltersComponent,
  HeaderMenuComponent,
  MissesComponent,
  NotesComponent,
  PlansComponent,
  DialogPopupComponent,
  EditMissesComponent,
  EditNotesComponent,
  EditPlansComponent,
  AddPlansComponent,
  AddNotesComponent,
  AddMissesComponent,
  ChangePlansComponent,
  ChangeNotesComponent,
  ChangeMissesComponent,
  JournalComponent,
];

@NgModule({
  declarations: [components, MainNavComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MainNavRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SearchSelectModule,
    FiltersModule,
    RouterModule,
    MatDialogModule,
    MatBadgeModule,
    DataTableModule,
    MatCardModule,
    MatExpansionModule,
    MatRadioModule,
    EditorModule,
    PreloadingSpinnerModule,
    MatStepperModule,
    MatTableModule,
  ],
  exports: [MainNavComponent],
  entryComponents: [DialogPopupComponent],
})
export class MainNavModule {
}
