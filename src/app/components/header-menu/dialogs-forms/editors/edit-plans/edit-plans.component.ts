import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../../../../state/state';
import { getSubjects, getTeachers } from '../../../../../state/selectors/app.selectors';
import * as plansActions from '../../../../../state/actions/plan.actions';
import { briefInfo } from '../../../../../constants/constants';
import { getSelectedPlanSubjects } from '../../../../../state/selectors/plan.selectors';

@Component({
  selector: 'app-edit-plans',
  templateUrl: './edit-plans.component.html',
  styleUrls: ['./edit-plans.component.scss'],
})
export class EditPlansComponent implements OnInit {
  @Input() isEdit = false;

  public editPlansForm: FormGroup;
  public subjects$ = this.store.select(getSubjects);
  public teachers$ = this.store.select(getTeachers);
  public selected$ = this.store.select(getSelectedPlanSubjects);
  public addAction = plansActions.AddPlanSubject;
  public editAction = plansActions.UpdatePlanSubject;
  public preDispatch = ['LOAD_SUBJECTS', 'LOAD_TEACHERS'];
  public briefInfo = briefInfo.plans;

  constructor(private formBuilder: FormBuilder, private store: Store<State>) {
  }

  public ngOnInit(): void {
    this.editPlansForm = this.formBuilder.group({
      subject: [''],
      teacher: [''],
      type: [''],
      hours: [''],
      date: [''],
    });

    this.editPlansForm.setValidators(Validators.required);
  }
}
