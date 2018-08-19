
/**
 * Created by krysn on 22.06.2017.
 */
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.scss']

})
export class Login {
    loginForm: FormGroup;
    emailControl;
    passwordControl;
    EMAIL_PATTERN = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    constructor(private formBuilder : FormBuilder, private userService : UserService) {
        this.buildForm();
    }


    public onSubmitForm(){
        var data ={
            email : this.emailControl.value,
            password : this.passwordControl.value
        };
        this.userService.login(data).subscribe(
            success => {

            },
            err => {
            }
        );
    }
    private buildForm(){
        this.loginForm = this.formBuilder.group({
            email : this.formBuilder.control(null, [Validators.pattern(this.EMAIL_PATTERN), Validators.required]),
            password : this.formBuilder.control(null, [Validators.required, Validators.minLength(6)])
        });
        this.emailControl = this.loginForm.get('email');
        this.passwordControl = this.loginForm.get('password');

    }

}
