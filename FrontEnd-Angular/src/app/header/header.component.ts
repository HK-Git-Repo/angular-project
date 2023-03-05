import { Component , OnInit } from '@angular/core';
import * as HttpFireAuth from 'firebase/auth';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isAuth !: boolean;

  constructor(
    private authservice : AuthService
  ) {}

  ngOnInit(): void {
      HttpFireAuth.getAuth().onAuthStateChanged(
        (user) => {
          if(user) this.isAuth = true;
          else this.isAuth = false;
        }
      );
  }

  onSignOut() {
    this.authservice.signOutUser();
  }
}
