import { Injectable, Inject } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Category } from '../category-add/category' 
  
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: Http, @Inject("adminApiUrl") private apiUrl) { }

  url: string = this.apiUrl + "/categories";
  getCategories(): Observable<Category[]> {
   
    return this.http.get(this.url).map(response => {
      // console.log(response.json());
      return response.json()
    });
  }
}
