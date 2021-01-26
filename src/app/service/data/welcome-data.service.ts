import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService()
  {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
   // console.log("Execute Hello World Bean Service")

  }
  // tslint:disable-next-line:typedef
  executeHelloWorldBeanServiceWithPathVariable(name)
  {
    const basicAuthHeaderString = this.createBasicAuthHTTPHeader();
    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, {headers});
    // use ` (tick) instead of '(single Quotes) to call URL with parameter
    // console.log("Execute Hello World Bean Service")

  }
  // tslint:disable-next-line:typedef
 createBasicAuthHTTPHeader()
  {
    const username = 'gunjan';
    const password = 'dummy';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;

  }



}
