import { Injectable, Inject } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Category } from '../category-add/category'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  constructor(private http: HttpClient, @Inject("adminApiUrl") private apiUrl) { }
 
  getCategories(): Observable<Category[]> {

    return this.http.get<Category[]>(this.apiUrl+"/category/all").map(response => {
      return response;
    });
  }

  deleteCategory(id:string): Observable<any>{
    return this.http.get<any>(this.apiUrl+"/category/delete?id="+id).map(response => {
      return response;
    });
  }

  
}
