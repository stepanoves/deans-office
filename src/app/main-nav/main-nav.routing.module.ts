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
import {WithAuthGuard} from "../guards/with-auth.guard";

const routes: Routes = [
  {path: 'misses', component: MissesComponent, canActivate: [WithAuthGuard]},
  {path: 'notes', component: NotesComponent, canActivate: [WithAuthGuard]},
  {path: 'plans', component: PlansComponent, canActivate: [WithAuthGuard]},
  {path: 'journal', component: JournalComponent, canActivate: [WithAuthGuard]},
  {path: 'misses/add', component: AddMissesComponent, outlet: 'editor', canActivate: [WithAuthGuard]},
  {path: 'misses/change', component: ChangeMissesComponent, outlet: 'editor', canActivate: [WithAuthGuard]},
  {path: 'notes/add', component: AddNotesComponent, outlet: 'editor', canActivate: [WithAuthGuard]},
  {path: 'notes/change', component: ChangeNotesComponent, outlet: 'editor', canActivate: [WithAuthGuard]},
  {path: 'plans/add', component: AddPlansComponent, outlet: 'editor', canActivate: [WithAuthGuard]},
  {path: 'plans/change', component: ChangePlansComponent, outlet: 'editor', canActivate: [WithAuthGuard]},
  { path: 'auth', component: AuthComponent, canActivate: [WithoutAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainNavRoutingModule {
}
