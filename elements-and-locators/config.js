exports.config = {


    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['test_angularjs_web.js'],
    capabilities: {
        'browserName': 'chrome' // or 'safari'
    }
};