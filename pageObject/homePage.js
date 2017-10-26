var HomePage = function HomePage(){
    this.URL = 'http://automationpractice.com/index.php';
    
    this.cartLabel = element(By.css('.shopping_cart'));
    this.contactUsLink = element(By.css('#contact-link'));
    this.womenPageLink = element(By.css('#block_top_menu > ul > li:nth-child(1) > a'));
    this.dressesLink = element(By.css("#block_top_menu > ul > li:nth-child(2) > a"));

    HomePage.prototype.clickDressesTabLink = function(){
        var that = this;
        that.dressesLink.click();
    }
}
module.exports = HomePage;