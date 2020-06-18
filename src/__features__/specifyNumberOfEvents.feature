Feature: Specify Number Of Events

  Scenario: When a user has not specified a number of events to be displayed, the default is "32"
    Given a user has not selected a specific amount of events to be displayed
    When a user is viewing a list of events
    Then the user will see “32” upcoming events by default

  Scenario: A user can change the number of events displayed
    Given a user is viewing a list of events
    When a user changes the number of events to be displayed
    Then the user should receive the same number of events specified
