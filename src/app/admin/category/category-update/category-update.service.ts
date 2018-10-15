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
export class CategoryUpdateService {

  constructor(private httpClient: HttpClient, @Inject("adminApiUrl") private apiUrl) { } 
  headers = new HttpHeaders(); 
  
  
  url: string = this.apiUrl + "/category/update";
  
  
  GetCategoryById(id: string): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + "/category?id="+id).map(response => { 
      return response;
    });
  }

  Update(category: any): Observable<any> { 
    this.headers.append('Content-Type','application/json'); 
    return this.httpClient
      .put(this.url, category,{ headers: this.headers} )
      .map(response => {return response; });
  }

}
