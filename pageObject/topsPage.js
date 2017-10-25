var TopsPage = function TopsPage(){
    this.URL = 'http://automationpractice.com/index.php?id_category=4&controller=category';
    this.categoryNameLabel = element(By.css(".cat-name"));
    this.productShirtOne = element(By.css("#center_column > ul > li:nth-child(1) > div > div.right-block > h5 > a"));
    }
    
    module.exports =TopsPage; 