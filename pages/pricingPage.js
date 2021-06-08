const elementutil = require('../utils/elementActions')
const locator =  require('../locators')

class PricePage {

get rentalValueSection ()
{
    return $(locator.rentavaluefieldPricing);
}

get startplanvalue()
{
    return $(locator.startPlanLocatorPricing);

}

get professionalplanvalue()
{
    return $(locator.professionalPlanLocatorPricing);

}

get ultimateplanvalue()
{
    return $(locator.ultimatePlannLocatorPricing);

}

get currentcurrencyvalue ()
{

    return $$(locator.currentCurrencyListPricing);
}

get postcurrencyvalue()
{
    return $$(locator.postcurrencyListPricing);
}

clickOnRentaValue(){

    elementutil.doClickWithLocators(this.rentalValueSection, 1, 6, 0)
}

selectCurrencyFromTheList(value)
{
    const currencyList = $(locator.currencydropdownPricing)
    currencyList.scrollIntoView();
    currencyList.selectByVisibleText(value);
}

}

module.exports =  new PricePage()