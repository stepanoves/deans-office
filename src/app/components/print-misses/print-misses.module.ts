import { MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPrintModule } from 'ngx-print';
import { PrintMissesComponent } from './print-misses.component';

@NgModule({
    declarations: [PrintMissesComponent],
    imports: [
        CommonModule,
        NgxPrintModule,
        MatButtonModule
    ],
    exports: [PrintMissesComponent]
  })
  export class PrintMissesModule {}