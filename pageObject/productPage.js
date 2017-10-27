var ProductPage = function ProductPage() {
    this.URL = 'http://automationpractice.com/index.php?id_product=1&controller=product';
    this.categoryNameLabel = element(By.css("#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1"));
    this.selectSize = element(By.css("#group_1"));
    this.sizeM = element(By.css("#group_1 > option:nth-child(2)"));
    this.conditionValue = element(By.css("#product_condition > span"));
    this.addToCart = element(By.css("#add_to_cart > button"));
    this.productDescription = element(By.css("#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1"));
    this.buttonCart = element(By.css("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span"));
    this.headerTextInPopup = element(By.css('.layer_cart_product.col-xs-12.col-md-6 >h2'));
    this.price = element(By.css("#our_price_display"));     
    this.checkout = element(By.css("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span"));
}

ProductPage.prototype.isDescriptionLongerThan = function (number) {
    return new Promise(function (resolve) {
        description = element(By.css(productDescription));
        description.getText().then(function (text) {
            resolve(text.length > number);
        })
    })
}
ProductPage.prototype.getPopupText = function () {
    var that = this;
    return that.headerTextInPopup.getText();
}

ProductPage.prototype.getUndefinedPopupText = function () {
    var that = this;
    return that.headerTextInPopup.getText()+ " !!tak wlasnie mialo sie stac";
}

ProductPage.prototype.getRichPopupText = function () {
    var that = this;
    return new Promise(function (resolve, reject) {
        that.headerTextInPopup.getText().then(function (popupTextValue) {
            resolve(popupTextValue + " !!tak wlasnie mialo sie stac");
        });
    });
}



module.exports = ProductPage; 