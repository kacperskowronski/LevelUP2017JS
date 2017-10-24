describe('Protractor Demo App', function() {
    it('should have a title', function() {
    browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
    //element(By.css('#header > app-toolbar > div.logo > a')).getText().toEqual('SHOP');
    //expect(browser.getTitle()).toEqual('Super Calculator');
    expect(browser.findElement(By.css('.shopping_cart')).getText()).toEqual('Cart (empty)');
    });
    });