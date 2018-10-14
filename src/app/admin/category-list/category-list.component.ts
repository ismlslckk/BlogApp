import { Component, OnInit, AfterViewInit, ViewContainerRef } from '@angular/core';
import { Category } from '../category-add/category'
import { CategoryListService } from './category-list.service'
import { NotificationsService } from 'angular2-notifications';
import { GlobalService } from '../global.service';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';



@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [CategoryListService]
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryListService, private globalService: GlobalService,
    private notificationService: NotificationsService, private modalService: ModalDialogService, private viewRef: ViewContainerRef) { }

  categories: Category[];
  getCategories() {
    this.globalService.isRequest = true;
    this.categoryService.getCategories().subscribe(c => {
      this.categories = c
      this.globalService.isRequest = false;
    });
  }

  deleteCategory(cat: Category) {
    this.modalService.openDialog(this.viewRef, {
      title: cat.name + ' isimli kategori silinsin mi?',
      childComponent: SimpleModalComponent,
      data: {
        text: 'Bu kategoriye ait tüm blog yazılarıda silinecektir!'
      },
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      actionButtons: [
        {
          text: 'Evet',
          buttonClass: 'btn btn-success',
          onAction: () => new Promise((resolve: any) => {
            this.categoryService.deleteCategory(cat.id).subscribe(
              result => {
                if (!result.isError) {
                  this.notificationService.success("Başarılı", result.message);
                  this.getCategories();
                  resolve();
                }
                else{
                  this.notificationService.error("Hata", result.message.toString());
                  resolve();
                }
              },
              err => {
                this.notificationService.error("Hata", err.message);
                resolve();
              }
            );

          })
        },
        {
          text: 'Vazgeç',
          buttonClass: 'btn btn-info',
          onAction: () => new Promise((resolve: any) => {
            resolve();
          })
        }
      ]
    });
  }

  ngOnInit() {
    this.getCategories();
  }

}
