import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isUrl',
})
export class IsUrlPipe implements PipeTransform {
  private isUrl(value?: string) {
    return !!value?.match(/^https/g)?.length;
  }
  transform(value?: string | string[]): boolean {
    if (Array.isArray(value)) {
      return value.findIndex(this.isUrl) >= 0;
    }
    return this.isUrl(value);
  }
}
