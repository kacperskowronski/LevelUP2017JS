var HomePage = require(pageObjectDir + "/homePage.js");
var WomenPage = require(pageObjectDir + "/womenPage.js");
var TopsPage = require(pageObjectDir + "/topsPage.js");
var ItemPage = require(pageObjectDir + "/itemPage.js");

var homePage = new HomePage();
var womenPage = new WomenPage();
var topsPage = new TopsPage();
var itemPage = new ItemPage();

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
        expect(itemPage.categoryNameLabel.getText()).toContain("Faded Short");
    })
    it('should check length',function(){
        itemPage.isDescriptionLongerThan(8).then(function(productDescription){
            expect(productDescription).toBeTruthy();
            });            
    }); 
    it('add a product in size M to the cart and check the cart', function(){
        
    })
})
