var casper = require('casper').create()

//must create variable for x, to create xpaths using casper

var x = require('casper').selectXpath;

casper.useragent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)');

casper.start('http://www.fedex.com/us/');

var passwordVariable = 'passwordValues';


casper.then(function () {
    //    (this).sendKeys('//*[@id="banner-login"]/form/input[18]')  //this is the log in form on fedex.com/us
    (this).sendKeys('#pswd-label', passwordVariable);
    console.log('Logging into Fedex.com');
    });
