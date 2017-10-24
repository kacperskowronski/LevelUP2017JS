var data = {
    "contact us": {
        'cssSelector': "#contact-link",
        "value": "Contact us"
    },
    "shop": {
        'cssSelector': ".shopping_cart",
        "value": 'Cart (empty)'
    }
}
using(data, function (element) {
    describe('Protractor Demo App element' + element, function () {
        it('should have a title', function () {
            browser.waitForAngularEnabled(false);
            browser.get('http://automationpractice.com/index.php');
            expect(browser.findElement(By.css(element.cssSelector)).getText()).toEqual(element.value);
        });
    });
});