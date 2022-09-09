import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  map,
  finalize,
  delay,
  debounceTime,
  distinctUntilChanged,
  takeLast,
} from 'rxjs';
import { HttpStatusService } from './http-status.service';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private statusService: HttpStatusService) {}
  totalRequests = 0;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.totalRequests++;
    this.statusService.setIsLoading(true);

    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;

        if (!this.totalRequests) {
          this.statusService.setIsLoading(false);
        }
      })
    );
  }
}
