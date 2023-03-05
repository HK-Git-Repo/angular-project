import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from 'src/app/Services/appareil.service';

@Component({
  selector: 'app-appareil-details',
  templateUrl: './appareil-details.component.html',
  styleUrls: ['./appareil-details.component.scss']
})
export class AppareilDetailsComponent implements OnInit{

  constructor(
    private appareilService : AppareilService,
    private route : ActivatedRoute,
  ) {}

  name: string = '';
  status: string = '';

  ngOnInit(): void {
      const _id = this.route.snapshot.params['id'];
      this.name = this.appareilService.getAppareilById(+_id)!.name;
      this.status = this.appareilService.getAppareilById(+_id)!.status;
  }
}
