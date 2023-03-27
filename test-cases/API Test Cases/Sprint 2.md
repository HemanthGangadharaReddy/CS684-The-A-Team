
| Test Case Id |    Description    |            Test Steps           |    Author    |   Test Method   |       Pass/Fail Criteria      |
| ------------ | :---------------- | :------------------------------ | :----------- | :-------------- | :---------------------------- |
| 1 | Retrieve articles | 1. Select the GET method and enter the new endpoint /news/{user} and post. <br /> <br /> 2. Check if the response is 200.  | Hemanth | Manual | We should get a 200 response and retrieve the articles for the user based on the preference selected by the user. |
| 2 | Retrieve articles (unauthorized user) | 1. Select the GET method and enter the new endpoint /news/{user} and post. <br /> <br /> 2. Check if the response is 401.  | Hemanth | Manual | We should get a 401 response. |
| 3 | Retrieve articles | 1. Select the GET method and enter the new endpoint /news/ and post. <br /> <br /> 2. Check if the response is 200.  | Hemanth | Manual | We should get a 200 response and retrieve the news articles. |
