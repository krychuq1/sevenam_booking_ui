
import {Component, EventEmitter, Inject, Input, OnInit, Output} from "@angular/core";
import {BookingService} from "../../services/booking.service";


@Component({
    selector: 'numberOfPeople',
    templateUrl: 'numberOfPeople.component.html',
    styleUrls: ['numberOfPeople.scss']
})

export class NumberOfPeopleComponent implements OnInit{
    isActive:boolean;
    selectValue:any;
    numberOfPeople;
    @Input() show:object;
    @Output() showOutput: EventEmitter<boolean>;

    ngOnInit(): void {
        this.selectValue = "number of people";
        this.numberOfPeople = [];
        this.generateNumberPeople();
    }
    constructor(@Inject(BookingService) private bookingService:BookingService) {
        this.showOutput = new EventEmitter();
    }

    public setSelectValue(newVal){
        this.selectValue = newVal;
        this.bookingService.setNumberOfPeople(this.selectValue);
        this.isActive = !this.isActive;
        this.showOutput.emit(this.isActive);

    }
    generateNumberPeople(){
        for(let i =1; i<20; i++){
            if(i==1){
                let obj = {
                    value : i,
                    viewValue: i + ' person'
                };
                this.numberOfPeople.push(obj);

            }else{
                let obj = {
                    value : i,
                    viewValue: i + ' people'
                };
                this.numberOfPeople.push(obj);

            }
        }
    }
    changeStatus():void{
        this.isActive = !this.isActive;
        this.showOutput.emit(this.isActive);
    }

}
