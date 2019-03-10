describe('Protractor Demo App', function() {



    
    it('should add two numbers', function() {
      const value1 = 1;
      const value2 = 2;
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model('first')).sendKeys(1);
      element(by.model('second')).sendKeys(2);
  
      element(by.id('gobutton')).click();
  
      expect(element(by.binding('latest')).getText()).
          toEqual(String(value1+value2)); 
    });
  });