Feature: Show/Hide An Events Details

  Scenario: An Event Element Is Collapsed By Default
    Given the user has selected a city, or is using their location
    When a list of events for that location are displayed
    Then the events details are collapsed by Default

  Scenario: A User Can Expand An Event To See Its Details
    Given a list of events is displayed
    When a user clicks on the event Details button
    Then the event the user clicked on will be expanded to show extra details

  Scenario: A User Can Collapse An Event To Hide Its Details
    Given an event element has been expanded
    When the user clicks on the Details button
    Then the events extra details will be collapsed