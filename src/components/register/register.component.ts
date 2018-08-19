/**
 * Created by krysn on 21.08.2017.
 */

/**
 * Created by krysn on 22.06.2017.
 */
import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {HeaderComponent} from "../header/header.component";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss']


})
export class Register implements OnInit{
    ngOnInit(): void {
    }
    registerForm: FormGroup;
    firstNameControl;
    lastNameControl;
    emailControl;
    passwordControl;
    EMAIL_PATTERN = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    isProcessing:boolean;
    isCompleted:boolean;

    constructor(private formBuilder : FormBuilder, private userService : UserService, private header : HeaderComponent) {
        this.buildForm();
        this.isProcessing = false;
        this.isCompleted = false;
    }

    private buildForm(){
        this.registerForm = this.formBuilder.group({
            firstName  : this.formBuilder.control(null, [Validators.required, Validators.minLength(3)]),
            lastName   : this.formBuilder.control(null, [Validators.required, Validators.minLength(3)]),
            email : this.formBuilder.control(null, [Validators.pattern(this.EMAIL_PATTERN), Validators.required]),
            password : this.formBuilder.control(null, [Validators.required, Validators.minLength(6)])
        });

        this.firstNameControl = this.registerForm.get('firstName');
        this.lastNameControl = this.registerForm.get('lastName');
        this.emailControl = this.registerForm.get('email');
        this.passwordControl = this.registerForm.get('password');

    }
    //on submit form
    public onSubmitForm(){
        this.isProcessing = true;
        //get data from form
        var data ={
            firstName : this.firstNameControl.value,
            lastName : this.lastNameControl.value,
            email : this.emailControl.value,
            password : this.passwordControl.value
        };
        //register user
        this.userService.registerUser(data).subscribe(
            success => {
                //login user
                this.login(data);
            },
            err => {
            }
        );
    }

    public login(data){
        this.userService.login(data).subscribe(
            success => {
                this.isProcessing = false;
                this.isCompleted = true;

            },
            err => {
            }
        );
    }

}
