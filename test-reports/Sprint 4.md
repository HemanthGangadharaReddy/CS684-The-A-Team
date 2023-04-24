
Test Report 1 

UI Test Cases:

| Test Case Id | Description | Executed By | Test Method | Expected Results | Pass/Fail |
| ------------ | ----------- | ----------- | ----------- | ---------------- | --------- |
| 1 | Search box | Hemanth | Manual Testing | A textbox should be displayed for search on the page after sign-in. |
| 2 | Search keyword | Hemanth | Manual Testing | The list of articles that have the keyword "bitcoin" in the headlines should be displayed. |
| 3 | Order of articles | Hemanth | Manual Testing | The list of articles should be displayed in the descending order starting with the most recent article. |
| 4 | Search keyword with OR | Hemanth | Manual Testing | The list of articles that have the keywords "bitcoin" or the "Ethereum" in the headlines should be displayed. |
| 5 | Search keyword with AND | Hemanth | Manual Testing | The list of articles that have boty the keywords "Google" and "Maps" in the headlines should be displayed. |
| 6 | Search keyword with NOT | Hemanth | Manual Testing | The list of articles that does not have the keyword "bitcoin" in the headlines should be displayed. |
| 7 | Search keyword with parenthesis | Hemanth | Manual Testing | The list of articles that have the keywords "crypto" and "ethereum" or "litecoin"  but not "bitcoin" in the headlines should be displayed. |
| 8 | Search meaningless keyword (Negative) | Hemanth | Manual Testing | A message which says no results found for the keyword should be displayed. |




API Test Cases:

| Test Case Id | Description | Executed By | Test Method | Expected Results | Pass/Fail |
| ------------ | ----------- | ----------- | ----------- | ---------------- | --------- |
| 1 | Retrieve articles from search endpoint | Hemanth | Manual | We should get a 200 response and the headlines of the articles retrieved should have the keyword given in the endpoint. |
| 2 | Retrieve articles in descending order | Hemanth | Manual | We should get a 200 response and retrieved articles should be in descending order with most recent article as first. |
