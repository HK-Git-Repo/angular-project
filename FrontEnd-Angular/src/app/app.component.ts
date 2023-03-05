import { Component } from '@angular/core';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  /************* Books Project **************/

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyCx40WW3iZ5x65exKwEIP_e98vA8pFYMgQ",
      authDomain: "httpclientdemo-487a0.firebaseapp.com",
      databaseURL: "https://httpclientdemo-487a0-default-rtdb.firebaseio.com",
      projectId: "httpclientdemo-487a0",
      storageBucket: "httpclientdemo-487a0.appspot.com",
      messagingSenderId: "801043711751",
      appId: "1:801043711751:web:7c218aef6a1533d73ca7a2",
      measurementId: "G-MBL4FNMGT7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }














  
  /************* Appareils Project **************/

  // secondes !: number;
  // counterSubsribtion !: Subscription;

  // constructor(private authService :AuthService){}

  // getAuthStatus() : boolean {
  //   return this.authService.isAuth;
  // }

  // ngOnInit(): void {
  //     const count = interval(1000);
  //     this.counterSubsribtion = count.subscribe(
  //       (value : number) => {
  //         this.secondes = value;
  //       }
  //     );
  // }

  // ngOnDestroy(): void {
  //     this.counterSubsribtion.unsubscribe;
  // }
}
