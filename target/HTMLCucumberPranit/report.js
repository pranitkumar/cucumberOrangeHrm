$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OrangeLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Positive HRM Login",
  "description": "I want to use this template for my feature file",
  "id": "positive-hrm-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Positive flows",
  "description": "",
  "id": "positive-hrm-login;positive-flows",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I entered credentials \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "positive-hrm-login;positive-flows;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "positive-hrm-login;positive-flows;;1"
    },
    {
      "cells": [
        "pranit",
        "pranitkumar"
      ],
      "line": 14,
      "id": "positive-hrm-login;positive-flows;;2"
    },
    {
      "cells": [
        "saurab",
        "saurabclass"
      ],
      "line": 15,
      "id": "positive-hrm-login;positive-flows;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginHrm.site_is_ready()"
});
formatter.result({
  "duration": 6783218437,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Positive flows",
  "description": "",
  "id": "positive-hrm-login;positive-flows;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I entered credentials pranit and pranitkumar",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pranit",
      "offset": 22
    },
    {
      "val": "pranitkumar",
      "offset": 33
    }
  ],
  "location": "LoginHrm.i_validate_the_positive_flows(String,String)"
});
formatter.result({
  "duration": 180775251,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"txtUsername\"}\n  (Session info: chrome\u003d66.0.3359.181)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-F5LDFVB\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.36.540470 (e522d04694c7eb..., userDataDir: C:\\Users\\Win\\AppData\\Local\\...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.181, webStorageEnabled: true}\nSession ID: 0d5504bdf8a211f5bcdcc521fad30a92\n*** Element info: {Using\u003did, value\u003dtxtUsername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat auto.cucumber.org.cucumberOrangeHrm.LoginHrm.i_validate_the_positive_flows(LoginHrm.java:40)\r\n\tat ✽.When I entered credentials pranit and pranitkumar(OrangeLogin.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginHrm.check_login_done()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginHrm.check_login_()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginHrm.site_is_ready()"
});
formatter.result({
  "duration": 5957396700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Positive flows",
  "description": "",
  "id": "positive-hrm-login;positive-flows;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I entered credentials saurab and saurabclass",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "saurab",
      "offset": 22
    },
    {
      "val": "saurabclass",
      "offset": 33
    }
  ],
  "location": "LoginHrm.i_validate_the_positive_flows(String,String)"
});
formatter.result({
  "duration": 24143195,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"txtUsername\"}\n  (Session info: chrome\u003d66.0.3359.181)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-F5LDFVB\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.36.540470 (e522d04694c7eb..., userDataDir: C:\\Users\\Win\\AppData\\Local\\...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.181, webStorageEnabled: true}\nSession ID: d48dd82f43c02aea6086ff26652e5465\n*** Element info: {Using\u003did, value\u003dtxtUsername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat auto.cucumber.org.cucumberOrangeHrm.LoginHrm.i_validate_the_positive_flows(LoginHrm.java:40)\r\n\tat ✽.When I entered credentials saurab and saurabclass(OrangeLogin.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginHrm.check_login_done()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginHrm.check_login_()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Second.feature");
formatter.feature({
  "line": 1,
  "name": "Negative HRM Login",
  "description": "I want to use this template for my feature file",
  "id": "negative-hrm-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginHrm.site_is_ready()"
});
formatter.result({
  "duration": 8123509841,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Negative flows",
  "description": "",
  "id": "negative-hrm-login;negative-flows",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I entered credentials Admin and admin",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "LoginHrm.i_validate_the_positive_flows(String,String)"
});
formatter.result({
  "duration": 30549450,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"txtUsername\"}\n  (Session info: chrome\u003d66.0.3359.181)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-F5LDFVB\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.36.540470 (e522d04694c7eb..., userDataDir: C:\\Users\\Win\\AppData\\Local\\...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.181, webStorageEnabled: true}\nSession ID: 43cbae1879f15db44eda3b3dc832ca2f\n*** Element info: {Using\u003did, value\u003dtxtUsername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat auto.cucumber.org.cucumberOrangeHrm.LoginHrm.i_validate_the_positive_flows(LoginHrm.java:40)\r\n\tat ✽.When I entered credentials Admin and admin(Second.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginHrm.check_login_done()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginHrm.check_login_()"
});
formatter.result({
  "status": "skipped"
});
});