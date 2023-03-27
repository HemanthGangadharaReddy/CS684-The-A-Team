UI Test Cases:

| Test Case Id | Description | Executed By | Test Method | Expected Results | Pass/Fail |
| ------------ | ----------- | ----------- | ----------- | ---------------- | --------- |
| 1 | Landing page articles | Hemanth | Manual Testing | The landing page should display a list of articles from the general category. |
| 2 | Refresh link | Hemanth | Manual Testing | The landing page should display the link to refresh the articles from the general category. |
| 3 | Refresh link after sign-in | Hemanth | Manual Testing | The landing page should display the link to refresh the articles. |
| 4 | Settings link after sign-in | Hemanth | Manual Testing | The landing page should display the link to Settings page. |
| 5 | Redirect to settings page | Hemanth | Manual Testing | The app should redirect to the Settings page when the link is clicked. |
| 6 | Display the settings page | Hemanth | Manual Testing | The Settings page should display a form to select the user's preferences when the link is clicked. |
| 7 | Display the categories | Hemanth | Manual Testing | The Settings page should display the categories 'General', 'Business', 'Entertainment', 'Health', 'Scicence', 'Sports' and 'Technology' when the link is clicked. |
| 8 | Checkbox for the categories | Hemanth | Manual Testing | The Settings page should display a checkbox to select each of these categories 'General', 'Business', 'Entertainment', 'Health', 'Scicence', 'Sports' and 'Technology' when the link is clicked. |
| 9 | Button to submit the category | Hemanth | Manual Testing | The Settings page should display an 'OK' button to submit the selected categories. |
| 10 | Select and submit the category | Hemanth | Manual Testing | The landing page should be displayed when we click on OK button. |
| 11 | Select none and submit the category | Hemanth | Manual Testing | The landing page should be displayed when we click on OK button. |
| 12 | Select all and submit the category | Hemanth | Manual Testing | The landing page should be displayed when we click on OK button. |
| 13 | Button to Cancel the changes | Hemanth | Manual Testing | The Settings page should display a 'Cancel' button to cancel the selected categories. |
| 14 | Select and Cancel the changes | Hemanth | Manual Testing | The landing page should be displayed when we click on Cancel button. |



DataBase Test Cases:

| Test Case Id | Description | Executed By | Test Method | Expected Results | Pass/Fail |
| ------------ | ----------- | ----------- | ----------- | ---------------- | --------- |
| 1 | New Schema changes | Hemanth | Manual Testing | The new columns should be present in the database for the News categories. |
| 2 | Changes in database | Hemanth | Manual Testing | The Business and Entertainment columns should show true in the database. |


API Test Cases:

| Test Case Id | Description | Executed By | Test Method | Expected Results | Pass/Fail |
| ------------ | ----------- | ----------- | ----------- | ---------------- | --------- |
| 1 | Retrieve articles | Hemanth | Manual | We should get a 200 response and retrieve the articles for the user based on the preference selected by the user. |
| 2 | Retrieve articles (unauthorized user) | Hemanth | Manual | We should get a 401 response. |
| 3 | Retrieve articles | Hemanth | Manual | We should get a 200 response and retrieve the news articles. |

