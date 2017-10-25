var WomenPage = function WomenPage(){
    this.URL = 'http://automationpractice.com/index.php?id_category=3&controller=category';
    this.categoryNameLabel = element(By.css(".cat-name"));
    this.topsCategory = element(By.css("#subcategories > ul > li:nth-child(1) > h5 > a"));
    }
    
    module.exports = WomenPage; 