import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: String = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  populateProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url.concat("/products/all")).pipe(catchError(this.formatErrors));
  }

  search(name: String): Observable<Product[]>{
    return this.http.get<Product[]>(this.url+"/products/q="+name).pipe(catchError(this.formatErrors));
  }
}
