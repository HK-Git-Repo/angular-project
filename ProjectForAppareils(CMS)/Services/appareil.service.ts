import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DBService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  constructor(
    private router : Router,
    private httpClient : HttpClient,
    private DB : DBService
  ){}

  appareilSubject = new Subject<any[]>();

  appareils :any[] = [];

  emitAppareil() {
    this.appareilSubject.next(this.appareils);
  }

  getAppareilById(_id : number) {
    const currentAppareil = this.appareils.find(
      (appareil) => {
        return appareil.id === _id;
      }
    );
    return currentAppareil;
  }

  allToggelON() :void {
    for(let appareil of this.appareils) {
      appareil.status = 'Enabled';
    }
    this.emitAppareil();
  }

  allToggelOFF() :void {
    for(let appareil of this.appareils) {
      appareil.status = 'Disabled';
    }
    this.emitAppareil();
  }

  toggelON(index: number) :void {
    this.appareils[index].status = 'Enabled';
    this.emitAppareil();
  }

  toggelOFF(index: number) :void {
    this.appareils[index].status = 'Disabled';
    this.emitAppareil();
  }

  addNewAppareil(nameAgr: string , statusArg : string) : void {
    const newAppareil = {
      id : this.appareils[(this.appareils.length -1)].id + 1 ,
      name: nameAgr,
      status : statusArg
    };
    this.appareils.push(newAppareil);
    this.router.navigate(['/appareils'])
  }

  saveAppareilToServer() {
    this.httpClient.put(this.DB.Collections[0], this.appareils)
    .subscribe(
      () => {
        console.log( 'Bien Enregistrer' );
      },
      (err) => {
        console.log('Erreur de sauvgade : '+err.toString());
      }
    );
  }

  getAppareilsFromServer() {
    this.httpClient.get<any[]>(this.DB.Collections[0])
    .subscribe(
      (response) => {
        this.appareils = response;
        this.emitAppareil();
      },
      (err) => {
        console.log('Erreur de sauvgade : '+err.toString());
      }
    );
  }

  

}
