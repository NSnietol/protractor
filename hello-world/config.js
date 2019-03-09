exports.config = {

   
    seleniumAddress:'http://localhost:4444/wd/hub',
    
    specs:['open.js'],
    capabilities: {
        'browserName': 'chrome' // or 'safari'
        }
};