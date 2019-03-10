const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {

    directConnect: true,

 //   seleniumAddress: 'http://localhost:4444/wd/hub',

        onPrepare: function() {
          jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: 'reports',
              fileNamePrefix: 'Evidence',
              consolidate: false
            })
          );
        },

    specs: ['test-definition/testCalculator.js'],


    multiCapabilities: [ {
        browserName: 'chrome'
      }]
    
};