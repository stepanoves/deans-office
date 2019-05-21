import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChangeDetectionStrategy, Component, OnDestroy, OnInit,} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

import * as authActions from '../../state/actions/auth.actions';
import {getAuthError} from '../../state/selectors/auth.selectors';
import * as appActions from "../../state/actions/app.actions";
import {State} from '../../state/state';
import {checkValidFormGroup, FieldErrorChecker} from '../../utils/utils';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  public isFieldInvalid: FieldErrorChecker;
  public authForm: FormGroup;
  public authError$ = this.store.select(getAuthError);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<State>,
  ) {}

  public ngOnInit(): void {
    this.store.dispatch(new appActions.ChangeVisible(false));
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.isFieldInvalid = checkValidFormGroup(this.authForm);
  }

  public ngOnDestroy(): void {
    this.store.dispatch(new appActions.ChangeVisible(true));
    this.destroy$.next();
    this.destroy$.complete();
  }

  public auth(): void {
    this.store.dispatch(new authActions.Auth(this.authForm.value));
  }

}
