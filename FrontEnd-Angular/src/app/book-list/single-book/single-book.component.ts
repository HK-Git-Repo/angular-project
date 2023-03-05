import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/Models/books.model';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  book !: Book;
  
  constructor(
    private bookService : BooksService,
    private router : Router,
    private activeRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.book = new Book('', '');
    const bookId = this.activeRoute.snapshot.params[ 'id' ];
    this.book = this.bookService.books[+bookId];
    // this.bookService.findById( +bookId ).then(
    //   (book : Book) => {
    //     this.book = book;
    //   }
    // );
  }

  goBack() {
    this.router.navigate( [ '/books' ] );
  }

}
