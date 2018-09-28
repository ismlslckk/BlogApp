import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../category-add/category'

@Injectable({
  providedIn: 'root'
})
export class CategoryAddService {

  constructor(private http: HttpClient, @Inject("adminApiUrl") private apiUrl) { }

  url: string = this.apiUrl + "/category/add";
  category:Category=new Category();

  deneme() {
    this.category.name="ismail";
    const data = new FormData();
    data.append('name', this.category.name);
    let headers = new HttpHeaders();
    //headers.set('Content-Type', 'application/json');
    headers.set('Content-Type', 'form-data');
    this.http.post(this.url, data, { headers: headers })
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}
