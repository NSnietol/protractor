const WebTableHomePage = function () {
   const newUserBtn = element(by.className('btn btn-link pull-right'));

   this.navigateTo = function () {
      browser.get('http://www.way2automation.com/angularjs-protractor/webtables/ ');


   };

   this.clickNewUser = function () {
      newUserBtn.click();
   };
  
};
module.exports = new WebTableHomePage();