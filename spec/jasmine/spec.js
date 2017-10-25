beforeAll(function(){//'kod który wykona sie przed wszystkim',
});
beforeEach(function(){//'kod który wykona sie przed kazdym testem',
});
afterAll(function(){//'kod który wykona sie po wszystkim',
});
afterEach(function(){//'kod który wykona sie po kazdym testem',
});

describe('Protractor Demo App', function () {
    it('should have a title', function () {
        
        
        browser.get('http://automationpractice.com/index.php');

        expect(browser.findElement(By.css('.shopping_cart'))
            .getText())
            .toEqual('Cart (empty)');
    });
});