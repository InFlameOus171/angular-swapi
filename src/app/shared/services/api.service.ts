import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL, Endpoints, getApiUrlFor } from './api.config';
import {
  IFilmResponse,
  IPeopleResponse,
  ISWApiListResponse,
} from './api.types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private config: Parameters<HttpClient['get']>[1] = {
    responseType: 'json',
    observe: 'body',
  };

  // getFilms(page?:number | string): Observable<ISWApiListResponse<IFilmResponse>> {
  //   const url = getApiUrlFor(Endpoints.FILMS);
  //   return this.http.get<ISWApiListResponse<IFilmResponse>>(url, this.config);
  // }

  getPeople(
    page?: string | null
  ): Observable<ISWApiListResponse<IPeopleResponse>> {
    const url = new URL(getApiUrlFor(Endpoints.PEOPLE));
    if (page && parseInt(page) > 0) {
      url.searchParams.append('page', `${page}`);
    }
    return this.http.get<ISWApiListResponse<IPeopleResponse>>(
      url.href,
      this.config
    );
  }
  getPeopleById(id: string): Observable<IPeopleResponse> {
    const url = getApiUrlFor(Endpoints.PEOPLE).concat(id);
    return this.http.get<IPeopleResponse>(url, this.config);
  }

  getFilmById(id: string): Observable<IFilmResponse> {
    const url = getApiUrlFor(Endpoints.FILMS).concat(id);
    return this.http.get<IFilmResponse>(url, this.config);
  }
}
