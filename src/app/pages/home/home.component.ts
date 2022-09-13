import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValues } from './models/home.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchForm = new FormGroup<FormValues>({
    searchTerm: new FormControl(),
    category: new FormControl(),
  });
  constructor(private router: Router) {}

  onSearch() {
    const { searchTerm, category } = this.searchForm.value;
    if (!(searchTerm && category)) {
      return;
    }
    this.router.navigate(['/search'], {
      queryParams: { term: searchTerm, category },
    });
  }
  ngOnInit(): void {}
}
