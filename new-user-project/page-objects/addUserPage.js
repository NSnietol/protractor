
const AddUserPage = function() {

   const nameField = element(by.name('FirstName'));
   const lastNameField = element(by.name('LastName'));
   const userNameField = element(by.name('UserName'));
   const passwordField = element(by.name('Password'));

   const emailField = element(by.name('Email'));

   const cellPhoneField = element(by.name('Mobilephone'));
   const saveBtn = element(by.css(".btn.btn-success"))


   this.clickSave = () => {
      saveBtn.click();
   }

   this.setName = (value)=> {
      nameField.clear().sendKeys(value);
   };
   this.getName = ()=> {
      return nameField.getText();
   };

   this.setLastName = (value)=> {
      lastNameField.clear().sendKeys(value);
   };

   this.getLastName = ()=> {
      return lastNameField.getText();
   };
   this.setUserName = (value)=> {
      userNameField.clear().sendKeys(value);
   };

   this.getUserName = ()=> {
      return userNameField.getText();
   };


   this.setPassword = (value)=> {
      passwordField.clear().sendKeys(value);
   };
   this.getPassword = ()=> {
      return passwordField.getText();
   };

   this.setEmail = (value)=> {
      emailField.clear().sendKeys(value);
   };

   this.getEmail = ()=> {
      return emailField.getText();
   };

   this.setCellPhone = (value)=> {
      cellPhoneField.clear().sendKeys(value);
   };

   this.getCellPhone = ()=> {
      return cellPhoneField.getText();
   };

   this.setCustomer = (name) => {
      element.all(by.xpath("//*[@class='radio ng-scope ng-binding']"))
         .filter(function (element) {
            element.getText().then(function (text) {
               return text == name;
            });
         });
   }

   this.setRole = (name) => {
      element(by.cssContainingText('option', name))
         .click();
   }




};
module.exports = new AddUserPage();