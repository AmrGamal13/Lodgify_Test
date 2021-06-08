const mainpage = require('../../../pages/mainPage')
const data = require('../../../configData')
const pricingpage =  require('../../../pages/pricingPage');
describe('Lodgify price page', function() {

    beforeEach(function(){
        browser.url('http://localhost:8080')
        browser.maximizeWindow()
        mainpage.clickOnPricingLink()
        expect(browser).toHaveTitle(data.lodgifyPricingPageTitle);

      });

    it('verify that the yearly plan selecting 50 rentals displays ($64, $375, $525)', function() {

       pricingpage.clickOnRentaValue();

       expect(pricingpage.startplanvalue.getText()).toEqual(data.starterPlanValue)
       expect(pricingpage.professionalplanvalue.getText()).toEqual(data.professionalPlanValue)
       expect(pricingpage.ultimateplanvalue.getText()).toEqual(data.ultimatePlanValue)

       let elementlist = pricingpage.currentcurrencyvalue;
       elementlist.forEach(element => {
        expect(element.getText()).toEqual(data.dollarSign); 
       });  
    })
    
it('changing currency is reflected in the pricing option', function(){

    pricingpage.selectCurrencyFromTheList(data.EURO);
    let currencyElemAfter = pricingpage.postcurrencyvalue;
    currencyElemAfter.forEach(element=>{
        expect(element.getText()).toEqual(data.eurosign)

    })
});

})