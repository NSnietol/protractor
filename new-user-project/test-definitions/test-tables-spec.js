// Pages
const homePage = require("../page-objects/homePage");
const addUserPage = require("../page-objects/addUserPage");
// Data
const dataNewUser = require("../data/test-data.json");
const dataSearch = require("../data/test-search.json");

describe('Web Table', function () {

  beforeEach(function () {
    homePage.navigateTo();
  });

  it('Add new user', function () {
    homePage.clickNewUser();
    addUserPage.setName(dataNewUser.firstName);
    addUserPage.setLastName(dataNewUser.lastName);
    addUserPage.setUserName(dataNewUser.userName);
    addUserPage.setPassword(dataNewUser.password);
    addUserPage.setCustomer(dataNewUser.customer);
    addUserPage.setRole(dataNewUser.role);
    addUserPage.setEmail(dataNewUser.email);
    addUserPage.setCellPhone(dataNewUser.cellPhone);

    addUserPage.clickSave();

    homePage.getRecords().then((records) => {
      delete dataNewUser.password
      delete dataNewUser.customer
      expect(records[0]).toEqual(
        dataNewUser
      );
    })

  });


  it('Search User by first name', function () {
    homePage.search(dataSearch.firstName);
    homePage.getRecords().then((records) => {
      expect(records[0].firstName.toLowerCase())
        .toContain(
          dataSearch.firstName.toLowerCase()
        );

    });
  });

  it('Sort(Ascending) by username', async () => {
    const orderedRecords =  homePage.getOrderedRecords().then();
    homePage.doubleClickFirstNameColum();
    homePage.getRecords().then((records) => {
      expect(records).toEqual(orderedRecords);
    })


  });




});