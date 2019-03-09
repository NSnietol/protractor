# Jasmine
Jasmine is a behaviour-driven development framework for testing .


## Suite in Jasmine
 A Suite represents a bunch of tests that are related. 

 * It takes two parameters: the name of the Suite, and the function which contains the calls to the
expectation methods called Specs

 * "describe" block Syntax:
 describe { “Description about the test cases”, function(){ Test case Code i.e. spec methods/it()}}


 ## Spec
Spec is defined using the it() method.

* it() also accepts a name and function parameter.

* The it() function parameter may contain variables and one or more calls to the
expect(actualResult) method. Used in conjunction with a Matcher function



### Matcher function
* Each matcher implements a boolean comparison between the actual value and the expected
value.
* It is responsible for reporting to Jasmine if the expectation is true or false. Jasmine will thenpass or fail the spec.

Example Matcher functions
* toBe(expectedResult)
* toMatch(expectedResult)
* toEqual(expectedResult)
* toContain(expectedResult)
* toBeNull(expectedResult), etc.

### Example
    describe("A suite", function() {
    it("contains spec with an expectation",   function() { expect(true).toBe(true);
    });
    });

### Notes 
 
 * Disabling Suites : Suites can be disabled with the xdescribe function. 
* Pending Specs : Pending Specs
 
