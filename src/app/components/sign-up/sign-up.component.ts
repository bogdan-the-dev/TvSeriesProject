import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  authForm: FormGroup
  faGoogle = faGoogle
  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.authForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    })
  }
  public isValid(): boolean {
    return this.authForm.controls?.['username'].touched && this.authForm.controls?.['username'].invalid
  }
  public getErrorMessage(): string {
    if(this.authForm.controls['username'].hasError('required')) {
      return 'Email field is required'
    }
    else if(this.authForm.controls['username'].hasError('email'))
    {
      return 'Email is invalid'
    }
  }

  public register() {
    const username = this.authForm.get('username').value
    const password = this.authForm.get('password').value
    this.authService.SignUp(username, password)
  }

}
