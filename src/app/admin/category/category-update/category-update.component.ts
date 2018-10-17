import { Component, OnInit } from '@angular/core';
import { Category } from '../category-add/category';
import { ActivatedRoute } from "@angular/router";
import { CategoryUpdateService } from './category-update.service';
import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  category: Category = new Category();
  id: string;
  errors:Array<string>;
  constructor(private route: ActivatedRoute, private categoryUpdateService: CategoryUpdateService
    , private notificationService: NotificationsService) {
    this.route.params.subscribe(params => { this.id = params["id"]; });
  }

  ngOnInit(): void {
    this.categoryUpdateService.GetCategoryById(this.id).subscribe(
      result => {
        if (!result.isError) {
          this.category = result.data;
        }
        else
          this.notificationService.error("Hata", result.message.toString());
      },
      err => {
        this.notificationService.error("Hata", err.message);
      }
    );
  }

  update() { 
    this.errors=new Array();
    this.categoryUpdateService.Update(this.category).subscribe(
      result => {
        if (!result.isError) {
          this.notificationService.success("Başarılı", result.message.toString());
        }
        else
        this.errors=result.message.toString().split(",");
      },
      err => {
        this.notificationService.error("Hata", err.message);
      }
    );
  }


}
