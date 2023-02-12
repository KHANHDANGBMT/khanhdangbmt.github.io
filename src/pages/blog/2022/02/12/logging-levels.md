---
title: Logging levels
author: [Khanhdq]
tag: Clean code
---


# Logging levels?
Log is a piece of information that was shown when the application runs through that code. Its information serves for troubleshooting and monitoring. It can be saved in a log file and supervised by any monitoring tool. When something happens with your application, I think the first thing you want to do is check the log to check what happens with your code. It's really important when we write logging in the right way and have enough information to serve that case.

Another case we can think about is that maybe in your sleep, the application caused some error for a specific case, it's a critical bug but not popular in our system. If you put in some logs in your code, the next morning will be very easy for you. Just check the log and find the reason why it happens.

# Log Level Hierarchy
In most logging frameworks you will encounter some of the following log levels:
Severity affecting the system is arranged in order from top to bottom

| Log type | Details |
| ------ | ------ |
| OFF | This log levels does not log anything. We will get no logging in our application  |
| FATAL | This log usually use to show critical errors which can break down the server or the business logic is no longer working. A FATAL log level may be used when the system is not able to connect to a crucial data store like a database or payment system are not available or any executing function `breaks down` the system, `sys_error`,... |
| ERROR | The log level I'm using is very popular. This log is used when we `throw errors` in functions that we can catch or prevent at that time. This error can prevent one or more functionality next. Imagine that this log can use in your try-catch function and it affects the user experience.|
| WARN | The log level indicates that something `unexpected happened` in the application. The problems or issues that might disturb the process of the functionality. The application does not fail in this case. For example, passing the error occurred that the send notice function like webhook to partner. |
| INFO | The standard log level that `something happened`, the application entered to the specific state or just log to easily check again to make sure that steps working right. For example in this log, we can use the INFO of the request payment of the user, request authorization, and the result after calling from 3rd parties. Noted that the information in this log might not include the error. |
| DEBUG | The log usually use for developers to `debug` on the local / dev environment. It will be disabled in the production environment because it might be large. In specific cases, we also use this log on production. Less granular compared to the TRACE level but the developer use it every day. This log includes the information for `diagnosing issues` and `troubleshooting` or running on the test environment for the purpose of making sure everything is running correctly |
| TRACE | The most rarity case when we want to know what happening in your application and in side the third-party libraries that we use in our application. We can use this log to check the steps inside the algorithm in the library or you want to check what query calling to our database. |
| ALL | It is the combination of all other loggin levels. This log will log any logging levels that are defined. |

Follow IBM documentations for logging levels, each level has an associated interger value usable by rules that monitor system mesages. View the detail values of each levels at [IBM - Understanding logging levels](https://www.ibm.com/docs/en/cognos-analytics/10.2.2?topic=SSEP7J_10.2.2/com.ibm.swg.ba.cognos.ug_rtm_wb.10.2.2.doc/c_n30e74.htm "The best search engine for privacy")

# Logging levels format
We need to identify what is the suitable format for our system. I prefer some of these parameter in our log format (make sure it consistent in our application): 
- Timestamp: it will provide you with the order of the dozen of log (date or interger format).
- Log levels name: look like INFO, ERROR, TRACE,... to make sure you can classify these log.
- Message: the message you need to show. Make sure it use English language and friendly and it unique for each logs.
Example: 
![Logging levels example](/src/blog-assets/images/2023_02_12_log_sample.png)

Do not write this code in our application if the outside does not have the try catch function: 
<Code language="javascript">
try {
    // do something
} catch (err) {
    throw(err);
}
</Code>


# Conclusion
The log action is very important in our application. I don't want you to commit and push the code just to show the log because the error has been swallow. 

Log can inform you not only how healthy your website is, but also how to calculate critical metrics like the error rate. Logs assist you in location the issue more quickly.

# Reference
- https://sematext.com/blog/logging-levels/
- https://codelearn.io/sharing/logging-python-system-talk-module
- https://www.section.io/engineering-education/how-to-choose-levels-of-logging/
- https://www.atatus.com/blog/9-best-practice-for-application-logging-that-you-must-know/#Use-English-Language-and-Friendly-Log-Messages