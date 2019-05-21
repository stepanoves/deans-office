import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {MAT_DATE_LOCALE} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainNavModule} from './main-nav/main-nav.module';
import {
  appReducer,
  journalReducer,
  missesReducer,
  notesReducer,
  plansReducer
} from './state/reducers';
import {
  AppEffects,
  NotesEffects,
  MissesEffects,
  PlansEffects,
  JournalEffects
} from './state/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainNavModule,
    StoreModule.forRoot({
      app: appReducer,
      misses: missesReducer,
      notes: notesReducer,
      plans: plansReducer,
      journal: journalReducer
    }),
    EffectsModule.forRoot([
      AppEffects,
      MissesEffects,
      NotesEffects,
      PlansEffects,
      JournalEffects
    ])
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
