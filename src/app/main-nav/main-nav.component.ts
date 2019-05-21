import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {State} from "../state/state";
import {Store} from "@ngrx/store";
import {getMenuVisible} from "../state/selectors/app.selectors";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavComponent {

  public headerMenuVisible$ = this.store.select(getMenuVisible);

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<State>) {}

}
