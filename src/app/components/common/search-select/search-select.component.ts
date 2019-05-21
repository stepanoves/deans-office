import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MatSelect, PageEvent } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchSelectComponent),
      multi: true,
    },
    {
      provide: MatSelect,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchSelectComponent implements OnInit, ControlValueAccessor {
  select = new FormControl('');
  filter = new FormControl('');

  @Input('dataStream') dataStream$: Observable<any>;
  @Input('placeholder') placeholder: string;
  @Input('required') isRequired: boolean;
  @Input('dependency') dependency: FormControl;
  @Input('defaultSelectValue') defaultSelectValue: number;
  @ViewChild('search') searchField: ElementRef;
  public currentPageIndex = 0;
  public pageSize = 5;

  constructor(private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    if (this.defaultSelectValue) {
      this.select.setValue(this.defaultSelectValue);
      this.select.updateValueAndValidity();
    }

    if (this.isRequired) {
      this.select.setValidators(Validators.required);
    }
    this.select.valueChanges.subscribe(value => this.propagateChange(value));
  }

  onTouched: any = () => {};

  public propagateChange = (val: any) => {};

  public setFocus() {
    this.searchField.nativeElement.focus();
  }

  public optionSelect(data): void {
    if (this.dependency) {
      if (data instanceof Object) {
        this.dependency.enable();
      } else {
        this.dependency.disable();
      }
    }
    this.writeValue(data.id);
    this.onTouched();
    this.filter.setValue('');
  }

  public onPaginateChange(event: PageEvent): void {
    this.currentPageIndex = event.pageIndex * this.pageSize;
  }

  public writeValue(obj: any): void {
    if (obj === null) {
      this.select.reset();
    }
    this.select.patchValue(obj);
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.select.disable();
    } else {
      this.select.enable();
    }

    this.cdr.detectChanges();
  }
}
