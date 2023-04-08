# INTRODUCTION

This is an application created for logging in and signup up users. The landing page leads to the login page for current users to sign in and also leads to a sign up page for new members, and after setting page navigates to Catgories, that users will select the specific topic of their interest to display latest news. This application aims to create a user friendly platform for streaming the news articles from various sources fetched by an API.

# Test Items
- Web application(UX) 
- API
- Database 

# Features to be Tested
- Register user
- Signing In User
- Landing page 
- Signing out User
- News listing on landing page
- Refresh news on dashboard
- News listings on User Profile page 
- Refreshing news on User Profile page
- News categories in Settings
- Navigation bar for Home and individual categories on the landing page
- User preference news on dashboard
- Category wise news on individual category tabs
- Pagination on dashboard and landing page tabs to display limited number of articles
- News articles to appearing in descending order of published date.


# Approach
We have approached this sprint by first creating the UX for the web application and working on creating an API to connect with the Database. We have created various test cases for the same.

# Pass/Fail Criteria

### Landing Page 
- When the user comes on the landing page, it would display general news
- Navigation Bar is added
- Pagination is added

### Refresh page
- When the user clicks on refresh, it would refresh the page and display updated news

### Setting page
- If the user wants to see specific category then user can change the settings
- Will land on the setting page choose the category, clicks radio button, it would display the news
- It would have a save button, to store save categories

### Navigation Bar
- Navigation bar displays different tabs for different categories of news
- The Home tab displays the news based on the default selected preferences of the user saved in the database

### Pagination
- Articles are divided into multiple pages with limited articles on each page
- News in consecutive pages has an older publishing date compared to the ones on the previous pages

### Login and Logout
- User can check successfully login and logout and check for the news

### Integration Testing
- For Integration testing we are following the Bottoms UP testing stategywhere we test lower level modules and move further up
- Integration testing has been used to check the integration of the modules and components and to test that they are all running as expected
- when an unauthenticated user is on the landing page, they should be able to access the login page with status 200 ok
- After entering the correct login details the user whould be able to access the dashboard 
- when an unauthenticated user enters details in the signup page they should be directed to the login page 
- The authenticated user should be able to access the settings button and select preferences 
- Authenticated user should be able to access the signout button on dashboard and should be directed back to the unauthenticated dashboard to login or sign up

# Testing Tasks
- Integration Testing is to be done by each Team member on their own machine

# Responsibilities
- UX testing
- API Testing
- Database testing
