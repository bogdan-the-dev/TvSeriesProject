import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  authForm: FormGroup
  faGoogle = faGoogle
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    const username = this.authForm.get('username').value;
    const password = this.authForm.get('password').value;
  }

  ngOnDestroy() {
  }

  private initForm() {
    let username = '';
    let password = '';

    this.authForm = new FormGroup({
      'username': new FormControl(username, [Validators.required, Validators.email]),
      'password': new FormControl(password, Validators.required)
    })
  }

  public signIn() {
    const username = this.authForm.get('username').value
    const password = this.authForm.get('password').value
    this.authService.SignIn(username, password).then(res => {
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


}
