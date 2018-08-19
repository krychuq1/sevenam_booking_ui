import { BookingWebsitePage } from './app.po';

describe('booking-website App', () => {
  let page: BookingWebsitePage;

  beforeEach(() => {
    page = new BookingWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
