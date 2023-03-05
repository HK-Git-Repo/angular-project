import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import * as firebase from 'firebase/compat/database/dist/database';
import { Subject } from 'rxjs';
import { Book } from '../Models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books : Book[] = [];
  booksSubject = new Subject<Book[]>();

  // constructor(private db : AngularFireDatabase) { }

  commit() : void {
    this.booksSubject.next(this.books);
  }

  saveAll() : void {
    // this.db.database.ref( '/books' ).set(this.books);
    
  }

  findAll() : void{
    // this.db.database.ref( '/books' ).on('value',(data)=> {
    //   this.books = data.val() ? data.val() : [];
    //   this.commit();
    // });
  }

  findById( id : number )  {
    // return new Promise(
    //   (resolve, reject) => {
    //     this.db.database.ref( '/books/' + id ).once( 'value').then(
    //       (data) => {
    //         resolve(data.val())
    //       },
    //       (error) => {
    //         reject(error);
    //       }
    //     );
    //   }
    // );
  }

  save( book : Book ) : void {
    this.books.push( book );
    this.saveAll();
    this.commit();
  }

  remove( book : Book ) : void {
    
    const getIndex = this.books.indexOf( book );
    this.books.splice( getIndex , 1 );
    this.saveAll();
    this.commit;

  }

  

}
