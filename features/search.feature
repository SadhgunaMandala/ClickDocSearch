Feature: The CLICKDOC Website

    Scenario Outline: As a user, I can search for any doctor

        Given I open the browser and load the url "https://demo.clickdoc.de/cd-de/"
        When I click on accept cookies
        Then I am on homepage of clickdoc with page header "Arzt finden. Termin buchen."
        When I click on doctor search button
        And I search with <doctorname> on doctors search bar
        And I click on find button
        Then I can validate two results <firstresult> and <secondresult>

        Examples:
            | doctorname | firstresult    | secondresult       |
            | Peter Test | Dr. Peter Test | Dr. Peter Test ABD |