var HomePage = require(pageObjectDir + "/homePage.js");
var DressesPage = require(pageObjectDir + "/dressesPage.js");
var ProductPage = require(pageObjectDir + "/productPage.js");

var homePage = new HomePage();
var dressesPage = new DressesPage();
var productPage = new ProductPage();

var data = {
    "Dress 1": {
        "dressLinkSelector": "dressOneLinkSelector",
        "price": "$26.00",
        "description": "Printed Dress"
    },
    "Dress 2": {
        "dressLinkSelector": "dressTwoLinkSelector",
        "price": "$50.99",
        "description": "Printed Dress"
    },
    "Dress 3": {
        "dressLinkSelector": "dressThreeLinkSelector",
        "price": "$28.98",
        "description": "Printed Summer Dress"
    },
    "Dress 4": {
        "dressLinkSelector": "dressFourLinkSelector",
        "price": "$30.50",
        "description": "Printed Summer Dress"
    },
    "Dress 5": {
        "dressLinkSelector": "dressFiveLinkSelector",
        "price": "$16.40",
        "description": "Printed Chiffon Dress"
    },
}

beforeAll(function () {
    browser.get(homePage.URL);
});

describe('Checking if all dresses opens and looks correctly', function () {

    it('Should Home Page be loaded', function () {
        expect(browser.getTitle()).toEqual('My Store');
    });

    it('Should Dresses Page be loaded', function () {
        homePage.clickDressesTabLink();
        expect(browser.getTitle()).toEqual('Dresses - My Store');
    });

    using(data, function (element) {
        it('Check if correct Dress is Loaded - checking Price', function () {
            dressesPage[element.dressLinkSelector].click();
            productPage.price.getText().then(function (text) {
                expect(element.price).toEqual(text);
            })
            
        })
        it('Check if correct Dress is Loaded - checking Description', function () {
            productPage.productDescription.getText().then(function (text) {
                expect(element.description).toEqual(text);
            })
           // browser.navigate().back();
        })
        it('Navigate Back', function () {
            browser.navigate().back();
            expect(browser.getTitle()).toEqual('Dresses - My Store');
        });


    })

});