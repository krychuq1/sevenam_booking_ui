import {Component, OnInit} from "@angular/core";
import {BookingService} from "../../services/booking.service";


@Component({
    selector: 'booking',
    templateUrl: 'booking.component.html',
    styleUrls: ['booking.scss'],

})

export class BookingComponent implements OnInit{
    numberOfPeople;
    isActive:boolean;
    manageDropDown = {
        numberOfPeople: false,
        time: false,
        showButton: true
    };
    date:Date;


    ngOnInit(): void {
        this.setPeople();
    }
    constructor(public bookingService:BookingService){
        this.numberOfPeople = [
            {value: 1, viewValue: '1 person'}
        ];
        // this.date = "number of people";
        this.isActive = false;

    }
    public bookTrip(){
        console.log("booking", this.bookingService.getBooking() );

    }
    public setPeople():void{
        for(let i =2; i<20; i++){
            let obj = {
               value : i,
               viewValue: i + ' people'
            };
            this.numberOfPeople.push(obj);
        }
    }
    dataSelected(calendar){
        setTimeout(()=> {
            this.manageDropDown.showButton = false;
            this.date = new Date();
        },50);

        calendar.open();
    }
    calendarHide(){
        this.manageDropDown.showButton = true;
    }
    outOut(){
        if(!this.manageDropDown.showButton){
            this.manageDropDown.showButton = true;

        }

    }
    public eventNumberOfPeople(data){
        this.manageDropDown['numberOfPeople'] = data;
        this.manageDropDown['time'] = false;

    }
    public eventTime(data){
        this.manageDropDown['time'] = data;
        this.manageDropDown['numberOfPeople'] = false;
    }
}
