describe('Protractor Demo App', function() {
    var firstNumber = element(by.css('.input-small.ng-valid.ng-dirty.ng-valid-parse.ng-touched'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
  

    let add = (a, b=0) =>{
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
      }
    
    beforeEach(()=> {
      browser.get('http://juliemr.github.io/protractor-demo/');
    });
  
    it('should have a title', ()=>{
      expect(browser.getTitle()).toEqual('Super Calculator');
    });
  
    it('should add one and two', ()=> {
        add(1,2)

      expect(latestResult.getText()).toEqual('3');
    });
  
    it('should add four and six', ()=> {
    
      add(4,6)
      expect(latestResult.getText()).toEqual('10');
    });
  
  });