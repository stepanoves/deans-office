import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { popupConfig } from '../../constants/constants';
import { DialogPopupComponent } from './dialogs-forms/diaolog-popup';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMenuComponent {
  constructor(public dialog: MatDialog, private router: Router) {}

  public openAddDialog(): void {
    this.insidePopupNavigate('add');
    const dialogRef = this.dialog.open(DialogPopupComponent, popupConfig.add);

    this.afterClosed(dialogRef);
  }

  public openEditDialog(): void {
    this.insidePopupNavigate('change');
    const dialogRef = this.dialog.open(
      DialogPopupComponent,
      popupConfig.change,
    );

    this.afterClosed(dialogRef);
  }

  private insidePopupNavigate(actionType: string): void {
    this.router.navigate([
      { outlets: { editor: [this.router.url.split('/')[1], actionType] } },
    ]);
  }

  private afterClosed(dialogRef): void {
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate([{ outlets: { editor: null } }]);
    });
  }
}
