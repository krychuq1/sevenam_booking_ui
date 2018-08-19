
export class Booking{
     _numberOfPeople:number;
      date:string;
     time:string;

    constructor(){
        // this.numberOfPeople = numberOfPeople;
        // this.date = date;
        //this.time = time;
    }

    set numberOfPeople(value: number) {
       this._numberOfPeople = value;
    }

    // set date(value: Date) {
    //     this._date = value;
    // }
    //
    // set time(value: string) {
    //     this._time = value;
    // }
    // get numberOfPeople(): number {
    //     return this._numberOfPeople;
    // }
    //
    // get date(): Date {
    //     return this._date;
    // }
    //
    // get time(): string {
    //     return this._time;
    // }
}