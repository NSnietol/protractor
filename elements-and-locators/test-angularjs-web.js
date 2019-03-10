
// 'Describe' block represents a test suite
xdescribe('Angular Js Web', () => {


    // 'it' block
    it('Find elements', () => {

        browser.get("https://angularjs.org/");


        element(by.css('i.icon-github-sign.icon-large')).getText()
            .then(function (text) {
                console.log("1 " + text);
            });
        element(by.xpath('//img[@alt="AngularJS"]')).getText()
            .then(function (text) {
                console.log("2 " + text);
            });


        element(by.model('yourName')).getText()
            .then(function (text) {
                console.log("3 " + text);
            });


        element(by.css('button.btn.btn-primary')).getText()
            .then(function (text) {
                console.log("4 " + text);
            });


        element(by.css('.done-false')).getText()
            .then(function (text) {
                console.log("4 " + text);
            });



    });

});