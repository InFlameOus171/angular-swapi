import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable, tap, debounceTime } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { Location } from '@angular/common';

import {
  IPeopleResponse,
  ISWApiListResponse,
} from 'src/app/shared/services/api.types';
import { HttpStatusService } from 'src/app/shared/services/http-status.service';

@Component({
  selector: 'app-home',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  previousUrl: string = '';
  nextUrl: string = '';
  people$?: Observable<ISWApiListResponse<IPeopleResponse>>;
  isLoading$?: Observable<boolean>;
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private httpStatusService: HttpStatusService,
    private location: Location
  ) {}

  listenToLoadingState(): void {
    this.isLoading$ = this.httpStatusService.loadingSub.pipe(debounceTime(200));
  }

  private updatePageNavigationFor =
    (currentPath: UrlSegment) =>
    (response: ISWApiListResponse<IPeopleResponse>) => {
      if (response.next) {
        const nextPage = new URL(response.next).searchParams.get('page');
        if (nextPage) {
          this.nextUrl = `${currentPath}/${nextPage}`;
        }
      }
      if (response.previous) {
        const previousPage = new URL(response.previous).searchParams.get(
          'page'
        );
        if (previousPage) {
          this.previousUrl = `${currentPath}/${previousPage}`;
        }
      }
    };

  ngOnInit(): void {
    const currentPage = this.route.snapshot.paramMap.get('page');
    const currentPath = this.route.snapshot.url[0];
    this.listenToLoadingState();
    this.people$ = this.api
      .getPeople(currentPage)
      .pipe(tap(this.updatePageNavigationFor(currentPath)));
  }
}
