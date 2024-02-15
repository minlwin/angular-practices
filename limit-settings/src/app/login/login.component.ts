import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  form:FormGroup

  constructor(builder:FormBuilder, private router:Router) {
    this.form = builder.group({
      loginId: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  login() {
    this.router.navigate(['/limit/list'])
  }
}
