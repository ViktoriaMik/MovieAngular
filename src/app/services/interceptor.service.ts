import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let clone = req.clone({
      headers: new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGJiZGQwOGM4Yjk4ZWQ4MWQ1MWM2M2ExYzk3OThjMSIsInN1YiI6IjYwYzNjNTQ3NDgzMzNhMDA0MWI4ZWI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7ueOVSmUsJnN_j0XATrX9NEEFt--wlKmZQOPGrQZUkE'})
    })
    return next.handle(clone);
  }
}
