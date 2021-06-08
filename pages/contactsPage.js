const elementutil = require('../utils/elementActions')
const locator =  require('../locators')

class ContactPage{

    get nameField()
    {
        return $(locator.nameFieldContacts);
    }

    get emailField ()
    {
        return $(locator.emailFieldContacts);

    }

    get commentField ()
    {
        return $(locator.commentFieldContacts);
    }

    get phonenumberField ()
    {
        return $(locator.phonenumberFieldContacts);
    }

    get sendButtonField ()
    {
        return $(locator.sendButtonFieldContacts);
    }

    get errormessageField ()
    {
        return $(locator.errormessageFieldContacts);
    }


    get calendarField(){
        return $(locator.calendarFieldContacts);
    }
// that is dynamic method for choosing dynamic locators for arrival month and date in the calendar, so it's not included in the locators.js
     arrivalDateCalendar(monthName, date)
    {
        return $(`//div[text()='${monthName}']/following-sibling::table//tr/td[text()='${date}']`)
    }

// that is dynamic method for choosing dynamic locators for departure month and date in the calendar, so it's not included in the locators.js

     deptDateCalendar(monthname, datenumber)
    {
        return $(`//div[text()='${monthname}']/following-sibling::table//tr/td[text()='${datenumber}']`)
    }

    EnterName(value){

        elementutil.doSetValue(this.nameField, value);
    }

    EnterPhoneNumber(value){

        elementutil.doSetValue(this.phonenumberField, value);
    }

    EnterEmailAddress (value)
    {
        elementutil.doSetValue(this.emailField, value)
    }

    EnterComment()
    {
        const commenttext = Math.random().toString(36).substring(1,10) + Math.random().toString(36).substring(1,10);
        elementutil.doSetValue(this.commentField, commenttext)
    }

    ClickCalendar(arrivalmonthValue, arrivaldateValue, deptmonthValue, deptdateValue)
    {
        elementutil.doClick(this.calendarField)
        elementutil.doClick(this.arrivalDateCalendar(arrivalmonthValue, arrivaldateValue))
        elementutil.doClick(this.deptDateCalendar(deptmonthValue, deptdateValue))
    }

    ClickonSend(){
    elementutil.doClick(this.sendButtonField)
    }

}

module.exports = new ContactPage()