Feature: Specify Number Of Events

  Scenario: By default, when a user hansn't specified an amount of events to be displayed, show the default of 32
    Given a user has not selected a specific amount of events to be displayed
    When a opens the app
    Then a user will see a list with 32 upcoming events by default

  Scenario: A user can change the number of events displayed
    Given opens the app
    When a user changes the amount of events to be displayed
    Then the specified amount of events should be displayed
