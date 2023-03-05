import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../Models/books.model';
import { BooksService } from '../Services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit , OnDestroy {

  books : Book[] ;
  bookSubscription !: Subscription; 
  
  constructor(
    private bookService : BooksService,
    private router : Router
  ) {
    this.books = [];
  }

  ngOnInit(): void { // On subscribe sur la liste des books Globale
      this.bookSubscription = this.bookService.booksSubject.subscribe(
        ( books : Book[] ) => {
          this.books = books;
        }
      );
      // this.bookService.findAll();
      this.bookService.commit();
  }

  goToAddNewBook() {
    this.router.navigate( [ '/books' , 'newBook' ] );
  }

  goToShowBook( id : number ) {
    this.router.navigate( [ '/books' , 'view' , id ] );
  }

  onDeleteBook( book :Book ) {
    this.bookService.remove( book );
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }

}
