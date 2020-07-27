Feature: Flights Reservation Module  

Scenario: Flights Reservation Module - home page verification

Given open the Firefox browser and launch the application with "https://phptravels.com/demo/"
When user navigate to Product and click on Flights Module
Then verify the title of  Flights Module
Then Close the browser

Scenario: Explore Demo in Flight Module


Given open the Firefox browser and launch the application with "https://phptravels.com/demo/"
When user navigate to Product and click on Flights Module
And user navigate to Explore Demo
Then user select the FrontEnd HomePage
And select the Flights option


