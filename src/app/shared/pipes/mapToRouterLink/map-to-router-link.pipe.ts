import { Pipe, PipeTransform } from '@angular/core';
import { apiURL } from '../../services/api.config';

@Pipe({
  name: 'mapToRouterLink',
})
export class MapToRouterLinkPipe implements PipeTransform {
  transform(
    value: string[] = [],
    type: 'people' | 'films'
  ): Array<{ label: string; page: string }> {
    switch (type) {
      case 'films': {
        return value.map((film, index) => ({
          label: `Film ${index + 1}`,
          page: film.split(apiURL)[1],
        }));
      }
      default: {
        return value.map((film, index) => ({
          label: `Film ${index + 1}`,
          page: film.split(apiURL)[1],
        }));
      }
    }
  }
}
