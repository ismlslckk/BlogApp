import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public isRequest:boolean;
  constructor() {
    this.isRequest=false;
   }
}
