import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  debounceTime,
  delay,
  filter,
  forkJoin,
  map,
  mergeMap,
  Observable,
  takeLast,
  tap,
} from 'rxjs';
import { MapToCharacterPipe } from 'src/app/shared/pipes/mapToCharacter/map-to-character.pipe';
import { apiURL } from 'src/app/shared/services/api.config';
import { ApiService } from 'src/app/shared/services/api.service';
import {
  IFilmResponse,
  IPeopleResponse,
} from 'src/app/shared/services/api.types';
import { HttpStatusService } from 'src/app/shared/services/http-status.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],
  providers: [MapToCharacterPipe],
})
export class FilmDetailsComponent implements OnInit {
  isLoading$: Observable<boolean> = this.httpStatusService.isLoading$.pipe(
    delay(0)
  );
  film$?: Observable<
    IFilmResponse & {
      characters$: Observable<IPeopleResponse[]>;
    }
  >;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private httpStatusService: HttpStatusService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.film$ = this.route.paramMap.pipe(
      map((params) => params.get('id')),
      filter(Boolean),
      mergeMap((f) => this.api.getFilmById(f)),
      map((film) => {
        const observableCharacters = forkJoin(
          film.characters?.map((characterUrl) => {
            const characterId = characterUrl.split('/people/')[1];
            return this.api.getPeopleById(characterId);
          }) ?? []
        );
        return { ...film, characters$: observableCharacters };
      })
    );
  }
}
