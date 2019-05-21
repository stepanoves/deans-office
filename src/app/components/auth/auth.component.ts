import { State } from '../../state/state';
import { Store } from '@ngrx/store';
import { checkValidFormGroup, FieldErrorChecker } from '../../utils/utils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import * as authActions from '../../state/actions/auth.actions';
import { getAuthError } from '../../state/selectors/auth.selectors';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit, OnDestroy {
  authForm: FormGroup;
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  isFieldInvalid: FieldErrorChecker;
  authError$ = this.store.select(getAuthError);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<State>,
  ) {}

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.isFieldInvalid = checkValidFormGroup(this.authForm);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  auth() {
    this.store.dispatch(new authActions.Auth(this.authForm.value));
  }

  toSignUp() {
    this.router.navigateByUrl('/signup');
  }
}
