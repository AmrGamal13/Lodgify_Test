const mainpage = require('.')
describe('Lodgify contact page', function() {
    it.skip('should have the right title', function() {
        browser.url('http://localhost:8080')
        browser.maximizeWindow()
        $('//a[text()="pricing.html"]').click();
        expect(browser).toHaveTitle('Lodgify Pricing | Affordable Vacation Rental Software From $11')
       

    })


});



