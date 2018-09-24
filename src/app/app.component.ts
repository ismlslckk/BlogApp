import { Component, OnInit } from '@angular/core';
import { GlobalService } from './admin/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void { 
  }
  constructor(private globalService:GlobalService){
  }
  title = 'BlogApp'; 
}
