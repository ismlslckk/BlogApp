import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule, Response } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './admin/left-sidebar/left-sidebar.component';
import { HeaderComponent } from './admin/header/header.component';
import { CategoryAddComponent } from './admin/category-add/category-add.component';
import { AdminRoutingModule } from './admin/admin-routing/admin-routing.module';
import { CategoryListComponent } from './admin/category-list/category-list.component';
import { GlobalService } from './admin/global.service';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot({
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: false,
      clickIconToClose: true,
      position:["top", "right"]
    })
  ],
  providers: [
    { provide: "adminApiUrl", useValue: "http://localhost:56877/api" },
    { provide: "isRequest", useValue: true },
    GlobalService,
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
