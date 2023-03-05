import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService : AuthService , private router : Router){}

  authStatus !: boolean;
  
  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() : void {
    this.authService.signIn().then(
      ()=> {
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    )
  }

  onSignOut() : void {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
