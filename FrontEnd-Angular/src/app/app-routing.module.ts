import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './authentification/sign-in/sign-in.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { BookListComponent } from './book-list/book-list.component';
import { NewBookComponent } from './book-list/new-book/new-book.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './Services/auth-guard.service';

const routes: Routes = [
  
  // { path : 'books' , canActivate : [ AuthGuardService ] ,component : BookListComponent },
  { path : 'books' , component : BookListComponent },
  { path : 'auth/signin' , component : SignInComponent },
  { path : 'auth/signup' , component : SignUpComponent },
  { path : 'books/newBook' ,  component : NewBookComponent },
  { path : 'books/view/:id' ,  component : SingleBookComponent },
  { path : 'not-found' , component : NotFoundComponent },
  { path : '' , redirectTo : 'books' , pathMatch : 'full' },
  { path : '**' , redirectTo : 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
