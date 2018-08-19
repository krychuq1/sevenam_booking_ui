import { Component } from '@angular/core';
import {User} from "../models/user.class";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLogin: boolean;
  isRegister: boolean;
  user:User;

  constructor(userservice : UserService){
    this.isLogin = false;
    this.isRegister = false;
    this.user = userservice.getUser();

  }



  login(){
    this.isLogin = true;
  }
  register(){
    this.isRegister = true;
  }
  goHome(){
    this.isLogin = false;
    this.isRegister = false
  }

}
