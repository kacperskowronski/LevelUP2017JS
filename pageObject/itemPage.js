var ItemPage = function ItemPage() {
    this.URL = 'http://automationpractice.com/index.php?id_product=1&controller=product';
    this.categoryNameLabel = element(By.css("#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1"));
    this.selectSize = element(By.css("#group_1"));
    this.selectSizeM = element(By.css("#group_1 > option:nth-child(2)"));
    this.addToCartButon = element(By.css("#add_to_cart > button"));
    this.productDescription = element(By.css("#short_description_content"))
}

ItemPage.prototype.isDescriptionLongerThan = function (number) {
    return new Promise(function (resolve) {
        description = element(By.css(productDescription));
        description.getText().then(function (text) {
            resolve(text.length > number);
        })
    })
}

ItemPage.prototype.addToCartAndCheck = function () {
    var that = this;
    var descriptionProd;
    return new Promise(function (resolve) {
        browser.wait(function () {
            return that.prodDescrToComparison.getText()
        }).then(function (text) {
            descriptionProd = text;
            console.log('descriptionProd: ' + descriptionProd);
        })
        that.sizeMDropdown.click();
        that.addToCartButton.click().then(function () {
            browser.wait(function () {
                return that.prodInCartDescr.getText()
            }).then(function (text) {
                console.log(text);
                resolve(descriptionProd == text);
            })
        });
    })
}


module.exports = ItemPage; 