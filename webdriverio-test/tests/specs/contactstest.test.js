const mainpage = require('../../../pages/mainPage')
const contactpage = require('../../../pages/contactsPage')
const data = require('../../../configData')
describe('Lodgify contact page', function() {

    beforeEach(function(){
        browser.url('http://localhost:8080')
        browser.maximizeWindow()
        mainpage.clickOnContactLink();
        expect(browser).toHaveTitle(data.lodgifycontactPageTitle);

      });
it(' message should be displayed in case Name field is left empty', function(){

    
    contactpage.EnterPhoneNumber(data.phonenumber)
    contactpage.EnterEmailAddress(data.email)
    contactpage.ClickCalendar(data.arrivalMonth, data.arrivalDate, data.deptMonnth, data.deptDate)
    contactpage.EnterComment();
    contactpage.ClickonSend();

    expect(contactpage.errormessageField.getText()).toEqual(data.nameerrorMessage)

});

it(' message should be displayed in case Phone Number field is left empty', function(){

    contactpage.EnterName(data.name);
    contactpage.EnterEmailAddress(data.email)
    contactpage.ClickCalendar(data.arrivalMonth, data.arrivalDate, data.deptMonnth, data.deptDate)
    contactpage.EnterComment();
    contactpage.ClickonSend();

    expect(contactpage.errormessageField.getText()).toEqual(data.phoneerrorMessage)
});


it(' message should be displayed in case Email Addrress field is left empty', function(){

    contactpage.EnterName(data.name);
    contactpage.EnterPhoneNumber(data.phonenumber)
    contactpage.ClickCalendar(data.arrivalMonth, data.arrivalDate, data.deptMonnth, data.deptDate)
    contactpage.EnterComment();
    contactpage.ClickonSend();
    
    expect(contactpage.errormessageField.getText()).toEqual(data.emailerrorMessage)

});

it(' message should be displayed in case Comment field is left empty', function(){

    contactpage.EnterName(data.name);
    contactpage.EnterPhoneNumber(data.phonenumber)
    contactpage.ClickCalendar(data.arrivalMonth, data.arrivalDate, data.deptMonnth, data.deptDate)
    contactpage.EnterEmailAddress(data.email)
    contactpage.ClickonSend();

    expect(contactpage.errormessageField.getText()).toEqual(data.commenterrorMessage)

});


})