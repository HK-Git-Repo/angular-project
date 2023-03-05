import { Component, Input } from '@angular/core';
import { AppareilService } from 'src/app/Services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent {

  constructor(private appareilService : AppareilService){}

  @Input() appareilName !: string;
  @Input() appareilStatus !: string;
  @Input() indexOfAppareil !: number ;
  @Input() ID !: number ;

  getColor() : String  {
    if (this.appareilStatus === 'Enabled') return 'green';
    return 'red';
  }

  ON():void {
    this.appareilService.toggelON(this.indexOfAppareil);
  }

  OFF():void {
    this.appareilService.toggelOFF(this.indexOfAppareil);
  }

}
