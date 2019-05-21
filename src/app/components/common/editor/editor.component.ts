import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../../state/state';
import { Observable, Subject } from 'rxjs';

import { convertJSONToObject, dispatchLoadAction, getPropertyValue } from '../../../utils/utils';
import { takeUntil } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        }),
      ),
      transition('void <=> *', animate(500)),
    ]),
  ],
})
export class EditorComponent implements OnInit, OnDestroy {
  @Input() isEdit = false;
  @Input() briefInfo = [];
  @Input() selected$: Observable<any>;
  @Input() forAdd$: Observable<any>;
  @Input() editorForm: FormGroup;
  @Input() addAction;
  @Input() editAction;
  @Input() preDispatch: string[];

  private destroy$ = new Subject<boolean>();
  private currentItemId: number;
  public dispatchLoadAction = dispatchLoadAction(this.store);
  public isFormChanged = true;
  public getPropertyValue = getPropertyValue;

  constructor(private formBuilder: FormBuilder, private store: Store<State>) {
  }

  ngOnInit() {
    this.preDispatch.forEach(action => this.dispatchLoadAction(action));
    this.editorForm.valueChanges.subscribe(() => console.log(this.editorForm));
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public add(): void {
    this.store.dispatch(new this.addAction(this.editorForm.value));
  }

  public update(): void {
    this.store.dispatch(
      new this.editAction(this.currentItemId, this.editorForm.value),
    );
  }

  public editItem(item: any): void {
    this.currentItemId = item.id;
    this.editorForm.patchValue(convertJSONToObject(item));
    this.isFormChanged = true;
    this.editorForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => (this.isFormChanged = false));
  }
}
