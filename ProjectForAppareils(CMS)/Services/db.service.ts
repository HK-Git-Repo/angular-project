import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DBService {
  
  private URL : string = 'https://httpclientdemo-487a0-default-rtdb.firebaseio.com/';

  Collections :string[] = [
    this.URL+'Appareils.json'
  ];


 
}
