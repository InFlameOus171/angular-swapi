import { Pipe, PipeTransform } from '@angular/core';
import { forkJoin, from, map, Observable, of } from 'rxjs';
import { apiURL } from '../../services/api.config';
import { ApiService } from '../../services/api.service';
import { IPeopleResponse } from '../../services/api.types';

@Pipe({
  name: 'mapToCharacter',
})
export class MapToCharacterPipe implements PipeTransform {
  constructor(private api: ApiService) {}
  transform(characters: string[] = []): Observable<IPeopleResponse[]> {
    const observables = characters.map((character) => {
      const characterId = character.split('/people/')[1];
      return this.api.getPeopleById(characterId);
    });
    return forkJoin(observables).pipe(
      map((characters) =>
        characters.map((character) => {
          const characterId = character.url?.split('/people/')[1];
          return {
            ...character,
            url: characterId ? 'people-details/'.concat(characterId) : '#',
          };
        })
      )
    );
  }
}
