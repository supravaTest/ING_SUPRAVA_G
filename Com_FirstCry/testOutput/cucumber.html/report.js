$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/FirstCry_Features/Navigation.feature");
formatter.feature({
  "name": "Navigations to Browser",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Navigations to browser and check the respective links",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch the firstcry URL",
  "keyword": "Given "
});
formatter.match({
  "location": "FirstCry_StepDef.FirstCry_StepDef.launchBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the browser launched successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstCry_StepDef.FirstCry_StepDef.validate_the_browser_launched_successfully()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat FirstCry_StepDef.FirstCry_StepDef.validate_the_browser_launched_successfully(FirstCry_StepDef.java:66)\r\n\tat ✽.Validate the browser launched successfully(file:///C:/Users/suprava.sahu/workspace/Com_FirstCry/./src/test/java/FirstCry_Features/Navigation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Navigate to \"All Categories\" link",
  "keyword": "When "
});
formatter.match({
  "location": "FirstCry_StepDef.FirstCry_StepDef.navigate_to_link(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});