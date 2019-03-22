const CalculatorHomePage = function() {
    const firstNumber = element(by.model('first'));
    const secondNumber = element(by.model('second'));
    const operator = element(by.model('operator'));
    const goBtn = element(by.id('gobutton'));
    const result =element(by.binding('latest'));
  
    this.get =  function() {
       browser.get('http://juliemr.github.io/protractor-demo/');
    };

    
    this.setSecondNumber = (number)=>{
        secondNumber.clear().sendKeys(number);
    }

    this.setFirstNumber = (value)=> {
        firstNumber.clear().sendKeys(value);
    };

    this.setOperator = (value) =>{
        element(by.cssContainingText('option', value)).click();

    };

    this.clickgoBtn = ()=> {
         goBtn.click();
    };

    this.getResult = ()=> {
        return result.getText();
    };
  };
  module.exports = new CalculatorHomePage();