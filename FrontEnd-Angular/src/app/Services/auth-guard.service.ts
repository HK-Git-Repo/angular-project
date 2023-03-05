import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import * as HttpFireAuth from 'firebase/auth';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( 
    private router : Router,
    private auth : AngularFireAuth
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return new Promise(
        (resolve , reject) => {
          this.auth.onAuthStateChanged(
            (user) => {
              if(user) resolve(true);
              else {
                this.router.navigate([ '/auth' , 'signin']);
                resolve(false);
              }
            }
          );
        }
      );
  }
}
