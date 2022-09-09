import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { IPeopleResponse } from 'src/app/shared/services/api.types';
import { Location } from '@angular/common';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent implements OnInit {
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  details$?: Observable<IPeopleResponse>;

  ngOnInit(): void {
    this.details$ = this.route.params.pipe(
      map((param) => param['id']),
      switchMap((id) => this.api.getPeopleById(id))
    );
  }
}
