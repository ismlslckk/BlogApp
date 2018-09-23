import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Category} from '../category-add/category'
import {CategoryService} from './category.service'
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers:[CategoryService]
})
export class CategoryListComponent implements OnInit  {
   
  constructor(private categoryService:CategoryService) { }

  categories:Category[];
  getCategories(){
      this.categoryService.getCategories().subscribe(c=>this.categories=c);
  }
  ngOnInit() {
    this.getCategories();
  }
    
}
