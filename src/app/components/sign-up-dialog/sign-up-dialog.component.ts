import {
  Component,
  Inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SignUp } from '../../state/models/sign-up';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpDialogComponent {
  signUpInfo: SignUp;
  constructor(@Inject(MAT_DIALOG_DATA) public data: SignUp) {
    this.signUpInfo = data;
  }
}
