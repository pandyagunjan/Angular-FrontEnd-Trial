import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{
constructor() { }

  // tslint:disable-next-line:typedef
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const username = 'gunjan';
    const password = 'dummy';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    request = request.clone(
      {
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      }
    );
    return next.handle(request);
  }
}
