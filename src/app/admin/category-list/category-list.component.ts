import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Category } from '../category-add/category'
import { CategoryListService } from './category-list.service'
import { NotificationsService } from 'angular2-notifications';
import { GlobalService } from '../global.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [CategoryListService]
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryListService, private globalService: GlobalService,
    private notificationService: NotificationsService) { }

  categories: Category[];
  getCategories() {
    this.globalService.isRequest = true;
    this.categoryService.getCategories().subscribe(c => {
      this.categories = c
      this.globalService.isRequest = false;
      //this.notificationService.info("Başarılı","Ürünler listelendi.");

    });
  }
  ngOnInit() {
    this.getCategories();
  }

}
