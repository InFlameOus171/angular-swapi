import { Component, Input, OnInit } from '@angular/core';
import { IPeopleResponse } from 'src/app/shared/services/api.types';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  @Input() public characters: IPeopleResponse[] = [];
  constructor() {}

  ngOnInit(): void {}
}
