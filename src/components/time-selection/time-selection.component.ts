
import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";


@Component({
    selector: 'timeSelection',
    templateUrl: 'time-selection.component.html',
    styleUrls: ['time-selection.component.scss']
})

export class TimeSelectionComponent {

    public hours: string[];
    public minutes: string[];
    public time;
    public isActive;

    @Input() show:object;
    @Output() showOutput: EventEmitter<boolean>;

    constructor() {
        this.showOutput = new EventEmitter();

        this.populateHours();
        this.populateMinutes();
        this.time = {
            hh : "",
            mm : ""
        };
        this.isActive = {
            dropDown : false,
            minute : true,
            hours : true
        };
    }
    setHour(hour):void{
        this.time.hh = hour;
        this.isActive.hours = !this.isActive.hours;
        if(!this.isActive.minute && !this.isActive.hours){
            this.isActive.dropDown = false;
        }
    }
    setMinute(minute):void{
        this.time.mm = minute;
        this.isActive.minute = !this.isActive.minute;
        if(!this.isActive.minute && !this.isActive.hours){
            this.isActive.dropDown = false;
        }

    }
    setDefaultTime(){
        console.log("blabla");
        this.isActive.dropDown = !this.isActive.dropDown;
        this.showOutput.emit(this.isActive.dropDown);
        this.isActive.minute = true;
        this.isActive.hours = true;
        if(this.time.hh === ""){
            this.time = {
                hh : "14",
                mm : "00"
            }
        }

    }

    populateMinutes():void{
        this.minutes = [];
        for(let i = 0;  i<60; i+=5){
            if(i<10){
                let minute =  '0' + i;
                this.minutes.push(minute);
            }else{
                let minute = i + "";
                this.minutes.push(minute);
            }
        }
    }

    populateHours():void{
        this.hours = [];
        for(let i = 0;  i<24; i++){
            if(i<10){
                this.hours[i] = '0' + i;
            }else{
                this.hours[i] = i + "";
            }

        }
    }

}
