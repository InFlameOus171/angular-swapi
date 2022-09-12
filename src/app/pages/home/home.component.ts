import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ApiService } from 'src/app/shared/services/api.service';
import {
  IPeopleResponse,
  ISWApiListResponse,
} from 'src/app/shared/services/api.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() searchTerm?: string;
  constructor(private location: Location) {}

  onSearch() {
    if (this.searchTerm) {
      this.location.go(`search`);
    }
  }
  ngOnInit(): void {}
}
