import { DISPATCH_MAP } from './../constants/constants';
import { State } from './../state/state';
import { Store } from '@ngrx/store';
import {isArray} from "util";
import {FormGroup} from "@angular/forms";

export const getQuery = (obj: object): string => {
  let query = '';
  for (const key in obj) {
    query += `${key}=${obj[key]}&`;
  }
  return `?${query}`;
};

export type FieldErrorChecker = (formControlName: string) => boolean;
export const checkValidFormGroup = (formGroup: FormGroup) => {
  return (formControlName: string): boolean => {
    const { touched, invalid } = formGroup.get(formControlName);

    return touched && invalid;
  };
};


export function dispatchLoadAction(store: Store<State>) {
  return function(actionName: string) {
    if (!DISPATCH_MAP[actionName].wasDispatched) {
      store.dispatch(new DISPATCH_MAP[actionName].action());
      DISPATCH_MAP[actionName].wasDispatched = true;
    }
  };
}

export function convertStringToDate(dateStr: string) {
  const [day, month, year] = dateStr.split('.');
  return new Date(+year, +month - 1, +day);
}

export function convertJSONToObject(obj: object): object {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] instanceof Object) {
      newObj[key] = obj[key].id;
      for (const innerKey in obj[key]) {
        newObj[key + uppercaseFirstSymbol(innerKey)] = obj[key][innerKey];
      }
    } else if (typeof obj[key] === 'string' && obj[key].split('.').length > 1) {
      newObj[key] = convertStringToDate(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function uppercaseFirstSymbol(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

export const getPropertyValue = (property: string, object: any): any => {
  return property.split('.')
    .reduce((prev, curr) => {
      return isArray(prev)
        ? prev.map(elem => getProperty(elem, curr)).join(', ')
        : getProperty(prev, curr);
    }, object);
};

const getProperty = (object: any, property: string) => {
  return object && object[property] || null;
};
