import {async} from '@angular/core/testing';
import {NumberOfPeopleComponent} from "./numberOfPeople.component";
import {BookingService} from "../../services/booking.service";
//
// import {HeaderComponent} from './header.component';

describe('number of people testing', () => {
    let numberOfPeopleComponent: NumberOfPeopleComponent;
    let bookingService: BookingService;
    beforeEach(async(() => {
        numberOfPeopleComponent = new NumberOfPeopleComponent(bookingService);
    }));
    it('should show navigation', async(() => {
        // numberOfPeopleComponent.changeStatus();
        // expect(numberOfPeopleComponent.isActive).toBe(true);
    }));
    it('should hide other drop downs', async(() => {
        numberOfPeopleComponent.changeStatus();

    }));
});