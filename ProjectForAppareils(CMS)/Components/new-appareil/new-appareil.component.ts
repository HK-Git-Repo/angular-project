import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppareilModel } from 'src/app/Models/appareil/appareil.model';
import { AppareilService } from 'src/app/Services/appareil.service';

@Component({
  selector: 'app-new-appareil',
  templateUrl: './new-appareil.component.html',
  styleUrls: ['./new-appareil.component.scss']
})
export class NewAppareilComponent implements OnInit {

  appareilForm !: FormGroup;
  defaultSelect : string = 'Disabled';

  constructor(
    private formBuilder : FormBuilder,
    private appareilService : AppareilService,
    private router : Router
    ) {}

  ngOnInit(): void {
    this.initForm();  
  }

  initForm() {
    this.appareilForm = this.formBuilder.group(
      {
        appareilName : [ '' , Validators.required],
        appareilStatus : [ '' , Validators.required]
      }
    );
  }

  onSubmit() {
    const formValue = this.appareilForm.value;
    this.appareilService.addNewAppareil(
      formValue['appareilName'],
      formValue['appareilStatus']
    );
  }

}
