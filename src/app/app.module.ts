import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MAT_DATE_LOCALE } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavModule } from './main-nav/main-nav.module';
import { appReducer, journalReducer, missesReducer, notesReducer, plansReducer } from './state/reducers';
import { AppEffects, JournalEffects, MissesEffects, NotesEffects, PlansEffects } from './state/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { TokenExpiredInterceptor } from './interceptors/token-expired.interceptor';
import { AuthEffects } from './state/effects/auth.effects';
import { authReducer } from './state/reducers/auth.reducers';

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
      journal: journalReducer,
      auth: authReducer,
    }),
    EffectsModule.forRoot([
      AppEffects,
      MissesEffects,
      NotesEffects,
      PlansEffects,
      JournalEffects,
      AuthEffects,
    ]),
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenExpiredInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
