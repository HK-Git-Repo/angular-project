import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksService } from './Services/books.service';
import { AuthService } from './Services/auth.service';
import { AuthGuardService } from './Services/auth-guard.service';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { NewBookComponent } from './book-list/new-book/new-book.component';
import { SignInComponent } from './authentification/sign-in/sign-in.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookListComponent,
    SingleBookComponent,
    NewBookComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireDatabaseModule
  ],
  providers: [
    BooksService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
