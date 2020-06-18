Feature: Show/Hide An Events Details

  Scenario: An Event Element Is Collapsed By Default
    Given the user has not expanded an event
    And the app is loaded
    When a list of events for that location is displayed
    Then the events details are collapsed by default

  Scenario: A User Can Expand An Event To See Its Details
    Given the app is loaded
    And the list of events has loaded
    When a user clicks on the event Details button
    Then the details for that event will be expanded

  Scenario: A User Can Collapse An Event To Hide Its Details
    Given the app is loaded
    And the user has expanded the details of an event
    When the user clicks on the Details button again
    Then the extra details for that event will be collapsed