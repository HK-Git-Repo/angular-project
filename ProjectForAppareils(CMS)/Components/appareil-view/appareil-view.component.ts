import { Component , OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { AppareilService } from '../../Services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  constructor(
    private appareilService : AppareilService ,
    private authService : AuthService
    ) {}

  lastUpdate = new Date();

  authStatus !: boolean;
  appareilSubscription !: Subscription;
  appareils: any[] = [];

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appreils : any[]) => this.appareils = appreils
    );
    this.authStatus = this.authService.isAuth;
    this.appareilService.emitAppareil();
  }
  
  onEnable() :void {
    this.appareilService.allToggelON();
  }

  onDisable() :void {
    this.appareilService.allToggelOFF();
  }

  onSave() {
    this.appareilService.saveAppareilToServer();
  }

  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }
}
