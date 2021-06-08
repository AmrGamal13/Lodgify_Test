module.exports = {

    pricingLinkLocator :'//a[text()="pricing.html"]',
    contactLinkLocator : '//a[text()="contact.html"]',
    nameFieldContacts : '//input[@placeholder="Name"]',
    emailFieldContacts : '//input[@placeholder="Email"]',
    commentFieldContacts: '//textarea[@placeholder="Comment"]',
    phonenumberFieldContacts : '//input[@placeholder="Phone"]',
    calendarFieldContacts : '//button[contains(@class,"calendarIcon_1")]',
    sendButtonFieldContacts : '//button[text()="Send"]',
    errormessageFieldContacts: '//div[contains(@class,"ui red")]',
    rentavaluefieldPricing : '//div[normalize-space()="50"]',
    startPlanLocatorPricing : '//h6[text()="Starter"]/following-sibling::div[2]//span[@class="total-sum"]',
    professionalPlanLocatorPricing : '//h6[text()="Professional"]/following-sibling::div[2]//span[@class="total-sum"]',
    ultimatePlannLocatorPricing : '//h6[text()="Ultimate"]/following-sibling::div[2]//span[@class="total-sum"]',
    currentCurrencyListPricing: '//div[contains(@class,"plan-price")]//span[contains(@class,"currency-symbol-pre")]',
    currencydropdownPricing : '//select[contains(@class,"price-currency-select")]',
    postcurrencyListPricing: '//div[contains(@class,"plan-price")]//span[contains(@class,"currency-symbol-post")]'

}