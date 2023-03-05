import { Component , OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{

  signUpForm !: FormGroup;
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
    this.signUpForm = this.formBuilder.group(
      {
        email : [ '' , [ Validators.required , Validators.email ] ],
        password : [ '' , [ Validators.required , Validators.pattern(/[0-9a-zA-Z]{6,}/) ] ]
      }
    );
  }

  onSubmit() {
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;
    this.authservice.createNewUser(email , password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (resone)=> {
        this.errMsg = resone;
      }
    );
  }

}
