# Functional Test Flows
Open http://www.way2automation.com/angularjs-protractor/webtables/ in a browser.

1. Add User : Enter data for first name, last name, username, password, customer, role, email and cellphone. Use test_data.json file for test data from repository folder.
Click Save
Verify added user on Home page.

2. Edit User
Click Edit button on added user row
Check Locked checkbox
Click Save
Verify Locked is checked on Home page

3. Search User by first name
Enter first name in search box.
Verify search result on Home page
4. Sort(Ascending) by username
Click on User Name column two times
Verify User Name column is sorted
5. Sort(Ascending) by cellphone
Click on Cell phone column two times
Verify Cell phone column is sorted
6. Delete User
Click cross(X) button in front of added user
Accept alert
Verify that user is deleted from Home page.
7. Close the browser.