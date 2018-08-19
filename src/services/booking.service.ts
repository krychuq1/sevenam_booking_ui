import {Injectable, OnInit} from "@angular/core";
import {Booking} from "../models/booking.class";

@Injectable()
export class BookingService{

    booking:Booking;
    constructor(){
        let date = new Date();
        this.booking = new Booking();

    }
    public getBooking(){
        return this.booking;
    }
    public setNumberOfPeople(numberOfPeople){
       this.booking.numberOfPeople = numberOfPeople;
    }






}