import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  delay,
  finalize,
  map,
  Observable,
  of,
  Subject,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpStatusService {
  private _loading$ = new BehaviorSubject<boolean>(false);
  public readonly isLoading$ = this._loading$.asObservable();

  constructor() {}

  setIsLoading(value: boolean) {
    this._loading$.next(value);
  }
}
