const HomePage = function () {
   const newUserBtn = element(by.className('btn btn-link pull-right'));
   const searchField = element(by.model("searchValue"));
   const firstNameColum =  element(by.xpath("//span[text()='First Name']"));



   this.navigateTo = function () {
      browser.get('http://www.way2automation.com/angularjs-protractor/webtables/ ');

   };

   this.clickNewUser = function () {
      newUserBtn.click();
   };

   this.search = function(value) {
      searchField.clear().sendKeys(value);
   };

   this.doubleClickFirstNameColum = function() {
      firstNameColum.click();
      firstNameColum.click();
      

   };

   this.getRecords = async () => {
       return await element.all(by.repeater('dataRow in displayedCollection'))
         .map(function (elm, index) {
            return {
               firstName: elm.element(by.css(".smart-table-data-cell:nth-child(1)")).getText(),
               lastName: elm.element(by.css(".smart-table-data-cell:nth-child(2)")).getText(),
               userName: elm.element(by.css(".smart-table-data-cell:nth-child(3)")).getText(),
               role: elm.element(by.css(".smart-table-data-cell:nth-child(6)")).getText(),
               email: elm.element(by.css(".smart-table-data-cell:nth-child(7)")).getText(),
               cellPhone: elm.element(by.css(".smart-table-data-cell:nth-child(8)")).getText(),
  
            };
         });
   }


   this.getOrderedRecords =async()=>{

   const initRecords = await this.getRecords().then((records)=>records);
                    
    return initRecords.sort(
        function (a, b) {
          if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
            return 1;
          } else return -1;
        });

   }



};
module.exports = new HomePage();