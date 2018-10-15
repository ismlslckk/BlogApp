import { Component, OnInit } from '@angular/core';
import { CategoryAddService } from './category-add.service';
import { Category } from './category';
import { NgForm } from '@angular/forms'
import { NotificationsService } from 'angular2-notifications';
import { GlobalService } from '../../global.service';


@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
  providers: [CategoryAddService]

})
export class CategoryAddComponent {

  isDirty: boolean = false;
  category: Category = new Category();

  constructor(private categoryAddService: CategoryAddService, private globalService: GlobalService,
    private notificationService: NotificationsService) { }

  Add(form: NgForm) {
    this.categoryAddService.Add(this.category).subscribe(
      result => {
        if (!result.isError){
          this.notificationService.success("Başarılı", result.message);
          this.category=new Category();
        }
        else
          this.notificationService.error("Hata", result.message.toString());
      },
      err => {
        this.notificationService.error("Hata", err.message);
      },
      () => {
        console.log("Complete function triggered.")
      }
    );
  }
 
}
