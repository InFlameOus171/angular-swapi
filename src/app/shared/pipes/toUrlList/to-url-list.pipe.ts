import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUrlList',
})
export class ToUrlListPipe implements PipeTransform {
  transform(value: string | string[]): string[] {
    if (Array.isArray(value)) {
      return value;
    }
    return [value];
  }
}
