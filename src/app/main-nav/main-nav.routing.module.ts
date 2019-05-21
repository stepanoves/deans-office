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
  ChangePlansComponent
} from '../components';

const routes: Routes = [
  {path: 'misses', component: MissesComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'plans', component: PlansComponent},
  {path: 'journal', component: JournalComponent},
  {path: 'misses/add', component: AddMissesComponent, outlet: 'editor'},
  {path: 'misses/change', component: ChangeMissesComponent, outlet: 'editor'},
  {path: 'notes/add', component: AddNotesComponent, outlet: 'editor'},
  {path: 'notes/change', component: ChangeNotesComponent, outlet: 'editor'},
  {path: 'plans/add', component: AddPlansComponent, outlet: 'editor'},
  {path: 'plans/change', component: ChangePlansComponent, outlet: 'editor'},
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
