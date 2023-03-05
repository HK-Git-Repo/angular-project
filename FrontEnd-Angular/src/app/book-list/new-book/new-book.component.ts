import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/Models/books.model';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit{

  bookForm !: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private bookService: BooksService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() : void {
    this.bookForm = this.formBuilder.group({
      title : [ '' , Validators.required ],
      author : [ '' , Validators.required ]
    });
  }

  addNewBook() : void {
    const title = this.bookForm.get( 'title' )?.value;
    const author = this.bookForm.get( 'author' )?.value;
    const newBook = new Book( title , author );
    this.bookService.save( newBook );
    this.router.navigate( [ '/books' ] );
  }

}
