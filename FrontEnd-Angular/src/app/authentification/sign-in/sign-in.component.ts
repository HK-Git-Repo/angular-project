import { Component , OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{

  signInForm !: FormGroup;
  errMsg : string = '';

  constructor(
    private formBuilder : FormBuilder,
    private authservice : AuthService,
    private router : Router,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm () {
    this.signInForm = this.formBuilder.group(
      {
        email : [ '' , [ Validators.required , Validators.email ] ],
        password : [ '' , [ Validators.required , Validators.pattern(/[0-9a-zA-Z]{6,}/) ] ]
      }
    );
  }

  onSubmit() {
    const email = this.signInForm.get('email')?.value;
    const password = this.signInForm.get('password')?.value;
    this.authservice.signInUser(email , password).then(
      () => 
        this.router.navigate(['/books']),
      (resone)=> {
        alert('isNotGood in SignInC');
        this.errMsg = resone;
      }
    );

  }
}
