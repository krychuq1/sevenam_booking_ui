import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Login} from "../components/login/login.component";
import {Register} from "../components/register/register.component";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UserService} from "../services/user.service";
import {HttpModule} from "@angular/http";
import {User} from "../models/user.class";
import {HeaderComponent} from "../components/header/header.component";
import {HomeComponent} from "../pages/home/home.component";
import {RouterModule} from "@angular/router";
import {BookingComponent} from "../components/booking/booking.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NumberOfPeopleComponent} from "../components/numberOfPeople/numberOfPeople.component";
import {Booking} from "../models/booking.class";
import {BookingService} from "../services/booking.service";
import {ClickOutsideDirective} from "../directives/click-outside.directive";
import {TimeSelectionComponent} from '../components/time-selection/time-selection.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    Register,
      HeaderComponent,
      HomeComponent,
      BookingComponent,
      NumberOfPeopleComponent,
      ClickOutsideDirective,
    TimeSelectionComponent

  ],
  imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterModule.forRoot([
          {
              path: '',
              component: HomeComponent
          }
      ])
  ],
  providers: [FormBuilder, UserService, User, HeaderComponent, Booking, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
