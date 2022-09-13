import { Pipe, PipeTransform } from '@angular/core';
import { apiURL } from '../../services/api.config';

@Pipe({
  name: 'mapToRouterLink',
})
export class MapToRouterLinkPipe implements PipeTransform {
  private toLinkdata(labelPrefix: string) {
    return function (value: string, index: number) {
      return {
        label: `${labelPrefix} ${index + 1}`,
        page: value.split(apiURL)[1],
      };
    };
  }

  transform(
    value: string | string[] = []
  ): Array<{ label: string; page: string }> {
    let links: string[] = [];
    if (!Array.isArray(value)) {
      links = [value];
    } else {
      links = value;
    }
    if (!!links[0].match('/films')?.length) {
      return links.map(this.toLinkdata('Film'));
    }
    if (!!links[0].match('/people')?.length) {
      return links.map(this.toLinkdata('Person'));
    }
    if (!!links[0].match('/species')?.length) {
      return links.map(this.toLinkdata('Species'));
    }
    if (!!links[0].match('/starships')?.length) {
      return links.map(this.toLinkdata('Starship'));
    }
    if (!!links[0].match('/planet')?.length) {
      return links.map(this.toLinkdata('Planet'));
    }
    if (!!links[0].match('/vehicles')?.length) {
      return links.map(this.toLinkdata('Vehicle'));
    }
    return [];
  }
}
