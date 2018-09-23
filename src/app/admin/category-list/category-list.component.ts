import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Category} from '../category-add/category'
import {CategoryService} from './category.service'
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers:[CategoryService]
})
export class CategoryListComponent implements AfterViewInit,OnInit  {
  async ngAfterViewInit() {
    await this.loadScript('/assets/admin/js/lib/datatables/datatables.min.js');
    await this.loadScript('/assets/admin/js/lib/datatables/cdn.datatables.net/buttons/1.2.2/js/dataTables.buttons.min.js');
    await this.loadScript('/assets/admin/js/lib/datatables/cdn.datatables.net/buttons/1.2.2/js/buttons.flash.min.js');
    await this.loadScript('/assets/admin/js/lib/datatables/cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js');
    await this.loadScript('/assets/admin/js/lib/datatables/cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/pdfmake.min.js');
    await this.loadScript('/assets/admin/js/lib/datatables/cdn.rawgit.com/bpampuch/pdfmake/0.1.18/build/vfs_fonts.js');
    await this.loadScript('/assets/admin/js/lib/datatables/cdn.datatables.net/buttons/1.2.2/js/buttons.html5.min.js');
    await this.loadScript('/assets/admin/js/lib/datatables/cdn.datatables.net/buttons/1.2.2/js/buttons.print.min.js');
    await this.loadScript('/assets/admin/js/lib/datatables/datatables-init.js');
  }
  constructor(private categoryService:CategoryService) { }

  categories:Category[];
  getCategories(){
      this.categoryService.getCategories().subscribe(c=>this.categories=c);
  }
  ngOnInit() {
    this.getCategories();
  }
  
  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    })
  }

}
