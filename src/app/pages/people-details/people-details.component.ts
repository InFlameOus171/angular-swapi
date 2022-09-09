import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { IPeopleResponse } from 'src/app/shared/services/api.types';
import { Location } from '@angular/common';
import { debounceTime, delay, map, Observable, switchMap, tap } from 'rxjs';
import { HttpStatusService } from 'src/app/shared/services/http-status.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent implements OnInit {
  details$?: Observable<IPeopleResponse>;
  isLoading$: Observable<boolean> = this.httpStatusService.isLoading$.pipe(
    debounceTime(2000),
    delay(0)
  );

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private httpStatusService: HttpStatusService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.details$ = this.route.params.pipe(
      map((param) => param['id']),
      switchMap((id) => this.api.getPeopleById(id))
    );
  }
}
