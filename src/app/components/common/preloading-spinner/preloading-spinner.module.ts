import { PreloadingSpinnerComponent } from './preloading-spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatProgressSpinnerModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  declarations: [PreloadingSpinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MatFormFieldModule],
  exports: [PreloadingSpinnerComponent]
})
export class PreloadingSpinnerModule {}
