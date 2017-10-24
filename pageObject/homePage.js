var HomePage = function HomePage(){
    this.URL = 'http://automationpractice.com/index.php';
    this.cartLabel = element(By.css('.shopping_cart'));
    this.contactLink = element(By.css('#contact-link'));
}
//HomePage.prototype = Object.create(Object.prototype);
//HomePage.prototype.constructor = Homepage;
module.exports = HomePage;