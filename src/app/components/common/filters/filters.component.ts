import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        zIndex: 100,
        opacity: 1,
        height: '*',
        visibility: 'visible'
      })),
      state('closed', style({
        zIndex: 0,
        opacity: 0,
        height: 0,
        visibility: 'hidden'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent {

  @Input('filters') filters: FormGroup;
  public isOpen = false;

  public resetFilters(): void {
    this.filters.reset();
  }

  public show(): void {
    this.isOpen = !this.isOpen;
  }

}
