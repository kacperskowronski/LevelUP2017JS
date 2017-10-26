var HomePage = require(pageObjectDir + "/homePage.js");
var WomenPage = require(pageObjectDir + "/womenPage.js");
var TopsPage = require(pageObjectDir + "/topsPage.js");
var ProductPage = require(pageObjectDir + "/productPage.js");
var CartPage = require(pageObjectDir + "/cartPage.js");

var homePage = new HomePage();
var womenPage = new WomenPage();
var topsPage = new TopsPage();
var productPage = new ProductPage();
var cartPage = new CartPage();
var EC = protractor.ExpectedConditions;

describe('Automation Web flow', function () {

    it('Click Women button', function () {
        //browser.waitForAngularEnabled(false);
        browser.get(homePage.URL);
        homePage.womenPageLink.click();
    });
    it('Check if Women Label is present?', function () {
        womenPage.categoryNameLabel.isDisplayed().then(function (text) {
            console.log(text);
        })
        expect(womenPage.categoryNameLabel.getText()).toEqual("WOMEN ");
    })
    it('check if tops category is opened?', function () {
        womenPage.topsCategory.click();
        womenPage.categoryNameLabel.isDisplayed().then(function (text) {
            console.log(text);
        })
        expect(topsPage.categoryNameLabel.getText()).toEqual("TOPS ");
    })
    it('check if the product description is displayed', function () {
        topsPage.productShirtOne.click();
        expect(productPage.categoryNameLabel.getText()).toContain("Faded Short");
    })
    it('should check length', function () {
        productPage.isDescriptionLongerThan(8).then(function (productDescription) {
            expect(productDescription).toBeTruthy();
        })
    })

    it('Click Add to cart button', function () {
        productPage.addToCart.click();
        browser.wait(EC.visibilityOf(productPage.headerTextInPopup), 5000)
            .then(function () {
                expect(productPage.headerTextInPopup.getText()).toEqual("Product successfully added to your shopping cart");
            })
    })
    it('go to basket', function () {
        productPage.buttonCart.click();
        expect(cartPage.getTitleCart()).toEqual("Order - My Store");
    });

    it('check product name', function () {

        expect(cartPage.getProductName()).toContain("Faded Short");
    });

})
