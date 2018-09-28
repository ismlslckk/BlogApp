import { Component, OnInit } from '@angular/core';
import { CategoryAddService } from './category-add.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  constructor(private categoryAddService: CategoryAddService ) { }

  ngOnInit() {
    this.categoryAddService.deneme();
  }

}
