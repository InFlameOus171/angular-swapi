import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss'],
})
export class LinkListComponent implements OnInit {
  @Input() linkList?: string | string[] = [];
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
