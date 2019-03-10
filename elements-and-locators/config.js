exports.config = {

    directConnect: true,

 //   seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['test-angularjs-web.js','test-calculator.js',"test-multiple-scenarios.js"],


    multiCapabilities: [ {
        browserName: 'chrome'
      }]
    
};