
Test Report 1 

UI Test Cases:

| Test Case Id | Description | Executed By | Test Method | Expected Results | Pass/Fail |
| ------------ | ----------- | ----------- | ----------- | ---------------- | --------- |
| 1 | Landing page links | Hemanth | Manual Testing | The landing page should display a list of links for Home and other news categories. | Fail  |
| 2 | Home link | Hemanth | Manual Testing | The home link should be selected by default and the landing page should display the articles from the general category. | Fail  |
| 3 | Home link articles order | Hemanth | Manual Testing | The home link should be selected by default and the landing page should display the articles in descending order with the most recent article as first. | Fail  |
| 4 | Category links | Hemanth | Manual Testing | The articles related to Sports category should be displayed upon clicking the Sports link. | Fail  |
| 5 | Home link | Hemanth | Manual Testing | The home link should display the articles from the categories selected in the settings page. | Fail  |
| 6 | Highlight selected links | Hemanth | Manual Testing | The link that is selected should be highlighted. | Pass  |
| 7 | Pagination | Hemanth | Manual Testing | The page should display only 250 articles per page. | Fail  |
| 8 | Category links after sign-in | Hemanth | Manual Testing | The articles related to Business category should be displayed upon clicking the Business link. | Fail  |




API Test Cases:

| Test Case Id | Description | Executed By | Test Method | Expected Results | Pass/Fail |
| ------------ | ----------- | ----------- | ----------- | ---------------- | --------- |
| 1 | Retrieve articles | Hemanth | Manual | We should get a 200 response and retrieve the articles for the user based on the preference selected by the user. | Pass  |
| 2 | Retrieve articles (unauthorized user) | Hemanth | Manual | We should get a 401 response. | Pass  |
| 3 | Retrieve articles in descending order | Hemanth | Manual | We should get a 200 response and retrieved articles should be in descending order with most recent article as first. | Pass  |
| 4 | Pagination | Hemanth | Manual | We should get a 200 response and only 250 articles should be retrieved. | Fail  |
| 5 | Retrieve articles based on category | Hemanth | Manual | We should get a 200 response and retrieve the articles for Business. | Pass  |
| 6 | Retrieve articles based on category | Hemanth | Manual | We should get a 200 response and retrieve the articles for Entertainment. | Pass  |
| 7 | Retrieve articles based on category | Hemanth | Manual | We should get a 200 response and retrieve the articles for Health. | Pass  |
| 8 | Retrieve articles based on category | Hemanth | Manual | We should get a 200 response and retrieve the articles for Science. | Pass  |
| 9 | Retrieve articles in descending order | Hemanth | Manual | We should get a 200 response and retrieved articles should be in descending order with most recent article as first. | Pass  |



Integration Test Cases:

| Test Case Id | Description | Executed By | Test Method | Expected Results | Pass/Fail |
| ------------ | ----------- | ----------- | ----------- | ---------------- | --------- |
| 1 | Integration between UX and the database- signup | Hemanth | Manual Testing | The newly created user should be added to the database. | Pass  |
| 2 | Integration between UX and the database - category settings | Hemanth | Manual Testing | The table should show the categories 'Business' and 'Entertainment' for that particular user in the database. | Pass  |
| 3 | Integration between UX and the database - Update category | Hemanth | Manual Testing | The table should show the updated categories for that particular user in the database. | Pass  |
| 4 | Integration between UX and the API- signup | Hemanth | Manual Testing | We should get a 200 response upon signing-in. | Pass  |
| 5 | Integration between UX, database and the API- signup | Hemanth | Manual Testing | We should be able to successfully sign-in from UI and the database should reflect the new user. | Fail  |
| 6 | Integration between UX, database and the API- category settings | Hemanth | Manual Testing | The articles related to 'Sports' and 'Technology' should be retrived from the API and the table should show the categories 'Sports' and 'Technology' for that particular user in the database. | Fail  |
