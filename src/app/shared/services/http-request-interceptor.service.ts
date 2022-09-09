import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { HttpStatusService } from './http-status.service';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private _loading: HttpStatusService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._loading.setIsLoading(true, request.url);
    return next.handle(request).pipe(
      map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
        console.log(evt);
        if (evt instanceof HttpResponse<any>) {
          this._loading.setIsLoading(false, request.url);
        }
        return evt;
      })
    );
  }
}
