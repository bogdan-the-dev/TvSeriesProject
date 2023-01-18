import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "@angular/fire/compat";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthGuard} from "./shared/guard/auth.guard";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TvSeriesGridComponent } from './components/tv-series-grid/tv-series-grid.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DropdownDirective } from './shared/directive/dropdown.directive';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import { TvSeriesFormComponent } from './components/tv-series-form/tv-series-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    VerifyEmailComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    TvSeriesGridComponent,
    NavbarComponent,
    DropdownDirective,
    MainPageComponent,
    TvSeriesFormComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
      {path: 'main-page', component: MainPageComponent, canActivate: [AuthGuard]},
      {path: 'sign-in', component: SignInComponent},
      {path: 'register-user', component: SignUpComponent},
      //   {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'forgot-password', component: ForgetPasswordComponent},
      {path: 'verify-email-address', component: VerifyEmailComponent},
      {path: 'add', component: TvSeriesFormComponent, canActivate: [AuthGuard]},
      {path: 'edit', component: TvSeriesFormComponent, canActivate: [AuthGuard]}
    ]),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
