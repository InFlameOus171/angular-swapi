import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { apiURL } from '../../services/api.config';
import { IPeopleResponse } from '../../services/api.types';

@Pipe({
  name: 'toRouteUrl',
})
export class ToRouteUrlPipe implements PipeTransform {
  transform(value: IPeopleResponse, ...args: unknown[]): string | undefined {
    const personId = value.url?.split('/people/')[1];
    if (personId) {
      return 'people-details/'.concat(personId);
    }
    return;
  }
}
