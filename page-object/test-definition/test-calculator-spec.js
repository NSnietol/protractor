const calculatorHomePage = require("../page-objects/calculator-home-page");



describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    calculatorHomePage.get();

    calculatorHomePage.setFirstNumber(5);

    calculatorHomePage.setOperator("+");
    calculatorHomePage.setSecondNumber(2);
    calculatorHomePage.clickgoBtn();

    expect(calculatorHomePage.getResult()).toEqual(String(5+2));
  });
});