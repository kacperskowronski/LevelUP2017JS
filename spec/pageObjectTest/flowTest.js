var HomePage = require("../../pageObject/homePage.js");
var contactUs = new ContactUs();

describe('Protractor Demo App', function() {
    it('should be visible', function() {
        browser.get(contactUs.URL);
        expect(contactUs.subjectHeading.isVisible());

    })
})