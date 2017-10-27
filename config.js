var using = require('jasmine-data-provider');
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'//browser name
    },
    frameworks: ['jasmine'],
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    suites: {
        //jasmine: 'spec/jasmine/*.js',
        pageObject1: 'spec/pageObjectTest/womenPageTest.js',
        //pageObject2: 'spec/pageObjectTest/exer2Test.js',
        //homeWork: 'spec/pageObjectTest/flowTest.js'
      },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },
    onPrepare:function(){
        global.pageObjectDir = __dirname+"/pageObject";
        global.using = using;
        
        browser.ignoreSynchronization = true;//non-angular page
    },
};