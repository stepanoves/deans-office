import { AbstractControl } from '@angular/forms';

export function searchSelectValidator(control: AbstractControl) {
  if (!(control.value instanceof Object)) {
    return {
      required: true,
    };
  }

  return null;
}
