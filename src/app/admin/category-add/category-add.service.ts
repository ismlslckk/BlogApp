import { Injectable, Inject } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../category-add/category';
import { Http, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryAddService {

  constructor(private http: Http, @Inject("adminApiUrl") private apiUrl) { }
  headers: Headers;
  options: RequestOptions;
  url: string = this.apiUrl + "/category/add";

  Add(param: any): Observable<any> {
    const body = new FormData();
    body.append('name', "fwef");
    return this.http
      .post(this.url, body, this.options)
      .map(response => { return response; });
  }

}
