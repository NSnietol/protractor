
// 'Describe' block represents a test suite
describe('Protractor Demo', () => {


    // 'it' block
    it('Should have a titlte', () => {

        browser.get("http://www.joecolantonio.com/ProtractorExample.html");
   
        expect(browser.getTitle()).toEqual('Joe Colantonio - Simple Protractor Example');
    });

});