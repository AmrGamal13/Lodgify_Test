const elementutil = require('../utils/elementActions')
const locator =  require('../locators')
class MainPage{

    get pricingLink ()
    {
        return $(locator.pricingLinkLocator);
    } 

    get contactsLink()
    {
        return $(locator.contactLinkLocator);
    }


    clickOnPricingLink (){

        elementutil.doClick(this.pricingLink)
    }

    clickOnContactLink (){

        elementutil.doClick(this.contactsLink)
    }

}

module.exports = new MainPage()