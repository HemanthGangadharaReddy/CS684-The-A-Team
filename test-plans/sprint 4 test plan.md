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
- Search bar to search for articles with certain keywords
- Includes advanced search which uses logical operators to find articles


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

### Search Bar
- User can enter a certain keyword to recieve a list of articles with that keyword
- User can use logical operators like AND, OR and NOT with a set of keywords to provide a more refined search

### Regression  Testing
- Regression testing is testing existing software applications to make sure that a change or addition hasn't broken any existing functionality
- We are using regression testing to evaluate every test report from every sprint to ensure efficiency of the code
- Regression testing will be done through manual tests to test every functionality of the web application from all the sprints
- Regression testing will be carried out after every change made to the code to ensure that every element of the code runs properly
- System testing will be run in the form of automated tests using Selenium for the functionalities of the web application

# Testing Tasks
- Regression Testing is to be done by each Team member on their own machine

# Responsibilities
- UX testing
- API Testing
- Database testing
