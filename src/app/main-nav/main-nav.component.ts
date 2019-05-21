import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

import {State} from "../state/state";
import {getMenuVisible} from "../state/selectors/app.selectors";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavComponent {

  public headerMenuVisible$ = this.store.select(getMenuVisible);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<State>,
    private router: Router,
    private authService: AuthService
  ) {}

  public logOut(): void {
    this.authService.logOut();
    this.router.navigateByUrl('auth');
  }
}
