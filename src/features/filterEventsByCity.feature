Feature: Filter Events By City

  Scenario: By default, when user hasn't searched for a city, show upcoming events based on the user's location
    Given user hasn't searched for any city
    When the user opens the app
    Then the user should see the list of upcoming events from their location

  Scenario: User should see a list of suggestions when they search for a city
    Given the main page is open
    When the user starts typing in the textbox
    Then the user should receive a list of cities (suggestions) that match what they've typed

  Scenario: User can select a city from the list of suggestions
    Given a user is typing “Denver” in the city textbox
    And the list of suggested cities is showing
    When the user selects a city (e.g., “Denver, Colorado”) from the list
    Then their city should be changed to the selected city (i.e., “Denver, Colorado”)
    And the user should receive a list of upcoming events for that city