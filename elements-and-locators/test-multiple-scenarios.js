describe('Protractor Demo App', function() {
    const firstNumber = element(by.css('.input-small.ng-valid.ng-dirty.ng-valid-parse.ng-touched'));
    const secondNumber = element(by.model('second'));
    const goButton = element(by.id('gobutton'));
    const latestResult = element(by.binding('latest'));
  

    const add = (a, b=0) =>{
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