import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';
import { SugnUpRoutingModule } from './sign-up-routing.module';

@NgModule({
  declarations: [SignUpComponent, SignUpDialogComponent],
  imports: [
    CommonModule,
    SugnUpRoutingModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  entryComponents: [SignUpDialogComponent],
  exports: [SignUpComponent],
})
export class SignUpModule {}
