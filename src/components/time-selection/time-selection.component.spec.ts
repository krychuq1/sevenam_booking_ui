import {async} from '@angular/core/testing';
import {TimeSelectionComponent} from "./time-selection.component";


describe('time selection testing', () => {
    let timeSelectionComponent: TimeSelectionComponent;
    let testObj: any;
    beforeEach(async(() => {
        timeSelectionComponent = new TimeSelectionComponent();
        testObj = timeSelectionComponent.isActive;

    }));
    it('should show timeSelection', async(() => {
        timeSelectionComponent.setDefaultTime();
        expect(testObj.dropDown).toBe(true);
    }));
    it('should hide timeSelection', async(() => {
        //show time
        timeSelectionComponent.setDefaultTime();
        //hide
        timeSelectionComponent.setDefaultTime();

        expect(testObj.dropDown).toBe(false);
    }));
});