import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {
  MissesComponent,
  JournalComponent,
  NotesComponent,
  AddMissesComponent,
  ChangeMissesComponent,
  AddNotesComponent,
  ChangeNotesComponent,
  PlansComponent,
  AddPlansComponent,
  ChangePlansComponent, AuthComponent
} from '../components';
import {WithoutAuthGuard} from "../guards/without-auth.guard";

const routes: Routes = [
  {path: 'misses', component: MissesComponent, canActivate: [WithoutAuthGuard]},
  {path: 'notes', component: NotesComponent, canActivate: [WithoutAuthGuard]},
  {path: 'plans', component: PlansComponent, canActivate: [WithoutAuthGuard]},
  {path: 'journal', component: JournalComponent, canActivate: [WithoutAuthGuard]},
  {path: 'misses/add', component: AddMissesComponent, outlet: 'editor', canActivate: [WithoutAuthGuard]},
  {path: 'misses/change', component: ChangeMissesComponent, outlet: 'editor', canActivate: [WithoutAuthGuard]},
  {path: 'notes/add', component: AddNotesComponent, outlet: 'editor', canActivate: [WithoutAuthGuard]},
  {path: 'notes/change', component: ChangeNotesComponent, outlet: 'editor', canActivate: [WithoutAuthGuard]},
  {path: 'plans/add', component: AddPlansComponent, outlet: 'editor', canActivate: [WithoutAuthGuard]},
  {path: 'plans/change', component: ChangePlansComponent, outlet: 'editor', canActivate: [WithoutAuthGuard]},
  { path: 'auth', component: AuthComponent, canActivate: [WithoutAuthGuard] },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  // { path: 'misses', component: MissesComponent, children: [
  //     { path: 'add', component: AddMissesComponent, outlet: 'editor' },
  //     { path: 'change', component: ChangeMissesComponent, outlet: 'editor' },
  //   ]},
  // { path: 'notes', component: NotesComponent, children: [
  //     { path: 'add', component: AddNotesComponent, outlet: 'editor' },
  //     { path: 'change', component: ChangeNotesComponent, outlet: 'editor' },
  //   ]},
  // { path: 'plans', component: PlansComponent, children: [
  //     { path: 'add', component: AddPlansComponent, outlet: 'editor' },
  //     { path: 'change', component: ChangePlansComponent, outlet: 'editor' },
  //   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainNavRoutingModule {
}
