
import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {UserService} from "../../services/user.service";


@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.scss']
})

export class HeaderComponent implements OnInit{
    ngOnInit(): void {

    }

    navBurger:boolean;

    @Input() isRegister: boolean;
    @Output() isRegisterChange: EventEmitter<boolean>;

    @Input() isLogin: boolean;
    @Output() isLoginChange: EventEmitter<boolean>;


    constructor(public userService : UserService) {
        this.navBurger = false;
        this.isRegisterChange = new EventEmitter<boolean>();
        this.isLoginChange = new EventEmitter<boolean>();

    }
    public sayHello(){

    }

     public openBurger(){
         this.navBurger =! this.navBurger;
     }
     public goHome(){
         this.isRegister = false;
         this.isRegisterChange.emit(this.isRegister);
         this.isLogin = false;
         this.isLoginChange.emit(this.isLogin);

     }
     public login(){
         this.isLogin = true;
         this.isRegister = false;
         this.isRegisterChange.emit(this.isRegister);
         this.isLoginChange.emit(this.isLogin);
     }
     public logout(){
         this.userService.logout();
         this.goHome();
     }

     public register(){
         this.isRegister = true;
         this.isLogin = false;
         this.isRegisterChange.emit(this.isRegister);
         this.isLoginChange.emit(this.isLogin);

     }
}
