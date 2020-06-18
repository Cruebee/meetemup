Feature: Specify Number Of Events

  Scenario: By default, when a user hansn't specified an amount of events to be displayed, show the default of 32
    Given a user hasn't selected a specific amount of events to be displayed
    When a user is viewing a list of events
    Then a user will see a list of 32 upcoming events by default

  Scenario: A user can change the number of events displayed
    Given a user is viewing a list of events
    When a user changes the amount of events to be displayed
    Then the user should receive the same amount of events specified
