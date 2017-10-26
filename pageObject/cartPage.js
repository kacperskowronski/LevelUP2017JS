
var  CartPage  =  function  CartPage() {
    this.URL  =  'http://automationpractice.com/index.php?controller=order';
    this.productName = element(By.css("td.cart_description > p > a"));
    this.getTitleCart = function () {
        return browser.getTitle();
    }
    this.getProductName = function () {
        return this.productName.getText();
    }
}


module.exports  = CartPage; 