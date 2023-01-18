import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit{
  authForm: FormGroup
  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.authForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email])
    })
  }

  public isValid(): boolean {
    return this.authForm.controls?.['email'].touched && this.authForm.controls?.['email'].invalid
  }

  public getErrorMessage(): string {
    if(this.authForm.controls['email'].hasError('required')) {
      return 'Email field is required'
    }
    else if(this.authForm.controls['email'].hasError('email'))
    {
      return 'Email is invalid'
    }
  }
  onSubmit() {

  }
}
