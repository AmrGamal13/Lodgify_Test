class ElementActions {

    doClick(element){

        element.waitForDisplayed();
        element.click();

    }

    doClickWithLocators (element, buttonPosition , X, Y){

        element.waitForDisplayed();
        element.click({button: buttonPosition, x: X, y: Y})

    }

    doGetText(element){

        element.waitForDisplayed();
       return element.getText();
    }

    doSetValue(element, value){

        element.waitForDisplayed();
        element.setValue(value);

    }
}

module.exports = new ElementActions()