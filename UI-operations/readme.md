# Operations on different types of elementos using Protractor

## Reference
1. https://www.protractortest.org/#/api?view=ProtractorBy.prototype.repeater

## Refreshing a page
    driver.navigate().refresh()


## ProtractorExpectedConditions
Represents a library of canned expected conditions that are useful for protractor, especially when dealing with non-angular apps.
1. not
1. and
1. or
1. alertIsPresent
1. elementToBeClickable
1. textToBePresentInElement
1. textToBePresentInElementValue
1. titleContains
1. titleIs
1. urlContains
1. urlIs
1. presenceOf
1. stalenessOf
1. visibilityOf
1. invisibilityOf
1. elementToBeSelected



## Performing 
    // Dragging one element to another.
        browser.actions().
            mouseDown(element1).
            mouseMove(element2).
            mouseUp().
            perform();

    // You can also use the `dragAndDrop` convenience action.
    browser.actions().
        dragAndDrop(element1, element2).
        perform();

    // Instead of specifying an element as the target, you can specify an offset
    // in pixels. This example double-clicks slightly to the right of an element.
    browser.actions().
        mouseMove(element).
        mouseMove({x: 50, y: 0}).
        doubleClick().
        perform();

## SwitchTo

    browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());


## Working with Alerts

    browser.wait(protractor.ExpectedConditions.alertIsPresent(),1000);
    const alertDialog = browser.switchTo.alert();


## Working with multiple Windows/PopUps

    handles = browser.getAllWindowHandle();
    handles.then(function(handle){
        var popUpHandle = handle[1];
        var handle=browser.switchTo().window(popUpHandle);
        handle=browser.getWindowHandle();
        expect(handle).toEqual(popUpHandle);
        b
    })
