import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import {
  IFilmResponse,
  IPeopleResponse,
  ISWApiListResponse,
} from 'src/app/shared/services/api.types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  response$?: Observable<ISWApiListResponse<Record<string, any>>>;
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    console.log(this.route);
    this.response$ = this.route.queryParams.pipe(
      map((param) => ({ term: param['term'], category: param['category'] })),
      switchMap((params) =>
        this.api.getSearchResultByCategory(params.category, params.term)
      )
    );
  }
}
