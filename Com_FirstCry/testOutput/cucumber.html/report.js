$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/FirstCry_Features/Navigation.feature");
formatter.feature({
  "name": "Navigations to Browser",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Navigations to browser and check the respective links",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Home"
    }
  ]
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
  "status": "passed"
});
formatter.step({
  "name": "Navigate to \"All Categories\" link",
  "keyword": "When "
});
formatter.match({
  "location": "FirstCry_StepDef.FirstCry_StepDef.navigate_to_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All the categories should be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstCry_StepDef.FirstCry_StepDef.all_the_categories_should_be_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select the preferred category \"GIRL FASHION\"",
  "keyword": "When "
});
formatter.match({
  "location": "FirstCry_StepDef.FirstCry_StepDef.user_should_select_the_preferred_category(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});