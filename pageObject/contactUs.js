var ContactUs = function ContactUs(){
    this.URL = 'http://automationpractice.com/index.php?controller=contact';
    this.subjectHeading = element(By.css('#id_contact'));
    this.emailAddress = element(By.css('#email'));
    this.orderRef = element(By.css('#id_order'));
}
//HomePage.prototype = Object.create(Object.prototype);
//HomePage.prototype.constructor = Homepage;
module.exports = ContactUs;