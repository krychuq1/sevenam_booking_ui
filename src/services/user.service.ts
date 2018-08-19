/**
 * Created by krysn on 28.06.2017.
 */
import {EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import '../../node_modules/rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {User} from "../models/user.class";


@Injectable()
export class UserService{



    user : User;
    token : string;


    constructor(private http: Http){
        this.init();

    }
    public init(){
        //check if token exist
       this.token = localStorage.getItem("token");
        if(this.token){
            this.getUserInfo().subscribe(
                success => {
                    this.setUser(success);
                },
                err => {
                    console.log("error")
                }
            );
        }

    }
    logout(){
        this.user = null;
        localStorage.removeItem('token');

    }
    registerUser(data) : Observable<any>{
        let headers      = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post( 'https://rikshawwonsky.azurewebsites.net/users', data, options)
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error || 'Server error'));

    }

    login(data) : Observable<any>{
        console.log("we are going to log in");
        var grant_type = "password";
        let body = `grant_type=${grant_type}&username=${data.email}&password=${data.password}`;
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post( 'https://rikshawwonsky.azurewebsites.net/token',body, {headers : headers})
            .map((res:Response) => this.setToken(res.json()))
            //...errors if any
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }
    public setToken(token){
        console.log('setting token');
        this.token = token.access_token;
        localStorage.setItem('token',  this.token);
        this.getUserInfo().subscribe(
            success => {
                this.setUser(success)
            },
            err => {
            }
        );

    }
    public getUserInfo(){
        console.log('getting user info');
        let headers      = new Headers({ 'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+this.token}); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers });

        return this.http.get( 'https://rikshawwonsky.azurewebsites.net/users', options)
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }

    public getUser(){
        return this.user;
    }

    public setUser(userData){
        console.log("setting user");

        this.user = {
           firstName : userData.value[0].firstName,
           lastName  : userData.value[0].lastName,
           email     : userData.value[0].email
       };

        console.log("we are setting user");

    }
}
