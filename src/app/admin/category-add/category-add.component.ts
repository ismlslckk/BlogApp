import { Component, OnInit } from '@angular/core';
import { CategoryAddService } from './category-add.service';
import { Category } from './category';
import { NgForm } from '@angular/forms'
import { NotificationsService } from 'angular2-notifications';
import { GlobalService } from '../global.service';



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
    if (form.invalid)
      this.notificationService.error("Hata", "Kategori adı boş geçilemez.");
    else {
      this.categoryAddService.Add(this.category).subscribe(
        data => {
          var result = JSON.parse(data._body);  
          console.log(result);
          if (!result.isError) 
            this.notificationService.success("Başarılı", result.message);
          else
          this.notificationService.error("Hata", result.message);

        },
        err => {
          console.log(err)
        },
        () => {
          console.log("Complete function triggered.")
        }
      );
    }

  }
}
