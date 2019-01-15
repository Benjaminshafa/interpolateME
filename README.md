# interpolateME
=========================================
How to run the component? 
Assuming you have node.js already installed. You can run the code by executing "node server.js"
=========================================
Questions: 
How would you test this code?
I would use a unit test framework such as Mocha (assuming it's a nodejs code), and create a set of test cases with hardcoded values and use them to test against the interpolateME class. the test cases could be simple strings, string with special characters, spaces, and etc...

How would you improve/expand the class if you had more time?
Minor improvement: I would have made the delimiter {{}} configurable, so that user could pass his/her preffered delimeter as an argument to interpolateME function. Handling special characters, empty spaces can also make the code more resilient.
Major improvement: We can give more advanced capabilities to this interpolate class and turnning it into a Templating engine. By doing that not only we can generate configurable strings, but also render HTML, or Javascript code.


How would you handle incorrect input?
Since the code runs synchronously we can safely return the error. Having a loggin mechanisem to log all the errors and write them into a file or DB can be beneficial to understand common issues and handling them properly in future. 
==========================================
