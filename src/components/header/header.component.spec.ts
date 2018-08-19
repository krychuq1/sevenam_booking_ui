import {async} from '@angular/core/testing';
import {UserService} from "../../services/user.service";

import {HeaderComponent} from './header.component';

describe('Header testing', () => {
    let headerComponent: HeaderComponent;
    let userService: UserService;
    beforeEach(async(() => {
        headerComponent = new HeaderComponent(userService);
    }));
    it('should open burger', async(() => {
        headerComponent.openBurger();
        expect(headerComponent.navBurger).toBe(true);
    }));
});