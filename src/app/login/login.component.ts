import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginFormGroup!: FormGroup;
  submitted = false;
  msg!: string;

  constructor(private formbuilder: FormBuilder, private router: Router,
    private service: LoginService) {
    this.loginFormGroup = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  //Check condition for match details
  public checkLogin(username: string, password: string) {
    if (username == '' || password == '') {
      alert("Please enter a username and password");
    }
    else {
      var checkdetail = this.service.check_UserandPass(username, password);
      if (checkdetail != null ) {
        this.router.navigate(['/dashboard']);
      } else {
        alert("Invalid username or password");
      }
    }
  }

}
