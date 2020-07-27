$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/feature/flightModule.feature");
formatter.feature({
  "name": "Flights Reservation Module",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Flights Reservation Module - home page verification",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "open the Firefox browser and launch the application with \"https://phptravels.com/demo/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "FlightModule.open_Firefox_launch_application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to Product and click on Flights Module",
  "keyword": "When "
});
formatter.match({
  "location": "FlightModule.user_navigate_Product_click_Flights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the title of  Flights Module",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightModule.verify_title_Flights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightModule.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Explore Demo in Flight Module",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "open the Firefox browser and launch the application with \"https://phptravels.com/demo/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "FlightModule.open_Firefox_launch_application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to Product and click on Flights Module",
  "keyword": "When "
});
formatter.match({
  "location": "FlightModule.user_navigate_Product_click_Flights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to Explore Demo",
  "keyword": "And "
});
formatter.match({
  "location": "FlightModule.user_navigate_to_Check_Pricing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the FrontEnd HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightModule.user_select_the_FrontEnd_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select the Flights option",
  "keyword": "And "
});
formatter.match({
  "location": "FlightModule.select_Flights_option()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: \r\n         Flights        \nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DIVYA-PC\u0027, ip: \u0027169.254.169.247\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002711.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 78.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200708170202, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 9096, moz:profile: C:\\Users\\Geek\\AppData\\Local..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.3, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5c56e43a-0c20-4ff2-952a-d0dff4579ce2\n*** Element info: {Using\u003dlink text, value\u003d\r\n         Flights        }\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.FlightModule.select_Flights_option(FlightModule.java:67)\r\n\tat ✽.select the Flights option(file:src/main/java/feature/flightModule.feature:17)\r\n",
  "status": "failed"
});
});