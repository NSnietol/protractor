const AddUserPage = function() {
    const nameField = element(by.name('FirstName'));
    const lastNameField = element(by.name('LastName'));
    const userNameField = element(by.name('UserName'));
    const passwordField = element(by.name('Password'));
    
    const  emailField = element(by.name('Email'));
    
    const cellPhoneField = element(by.name('Mobilephone'));


    const newUserBtn = element(by.className('btn btn-link pull-right'));
    
    const newUserBtn = element(by.className('btn btn-link pull-right'));
    
    const newUserBtn = element(by.className('btn btn-link pull-right'));
  
 

   this.clickNewUser = function() {
      newUserBtn.click();
   };


   this.setCustomer = (name) => {

      element.all(by.repeater('option in column.options')).
         filter(function (elem, index) {
            return elem.getText().then(function (text) {
               return text === name;
            });
         }).first().click();


   }
  };
  module.exports = new WebTableHomePage();