
import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.scss']
})

export class HomeComponent{

    isRegister:boolean;
    isLogin:boolean;

    constructor(){
        this.isRegister = false;
        this.isLogin = false;
    }

}
