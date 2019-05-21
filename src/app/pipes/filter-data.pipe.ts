import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter',
})
export class FilterDataPipe implements PipeTransform {
  transform(dataList, searhStr: string) {
    if (!dataList.length || searhStr === '') {
      return dataList;
    }

    return dataList.filter(el => el.name.startsWith(searhStr));
  }
}
