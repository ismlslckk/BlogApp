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

  url: string = this.apiUrl + "/category/all";
  getCategories(): Observable<Category[]> {

    return this.http.get<Category[]>(this.url).map(response => {
      return response;
    });
  }
}
