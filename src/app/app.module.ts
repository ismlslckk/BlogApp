import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule, Response } from "@angular/http";



import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './admin/left-sidebar/left-sidebar.component';
import { HeaderComponent } from './admin/header/header.component';
import { CategoryAddComponent } from './admin/category-add/category-add.component';
import { AdminRoutingModule } from './admin/admin-routing/admin-routing.module'
import { RouterModule } from '@angular/router';
import { CategoryListComponent } from './admin/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    HeaderComponent,
    CategoryAddComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    HttpModule
  ],
  providers: [{ provide: "adminApiUrl", useValue: "http://northwindapi.azurewebsites.net/api" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
