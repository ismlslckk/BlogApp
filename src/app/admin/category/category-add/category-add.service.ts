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

  constructor(private httpClient: HttpClient, @Inject("adminApiUrl") private apiUrl) { } 
  headers = new HttpHeaders(); 
  
  
  url: string = this.apiUrl + "/category/add";

  Add(category: any): Observable<any> { 
    this.headers.append('Content-Type','application/json'); 
    return this.httpClient
      .post(this.url, category,{ headers: this.headers} )
      .map(response => {return response; });
  }

}
