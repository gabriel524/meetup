## Meet App

### Introduction
## meetup Test Scenarios
Brief discription: This app work by providing a list of upcoming events for any given city, with data provided by Google Calendar which will be use,the app works offline using cached data from the last time it was used online. Why using the app, user can search for events in a specific city or browse all events, customize how many events are shown on screen, click an event for more details, and see how many events are upcoming in certain cities.


This is a serverless React App built using TDD (Test driven development).App uses Google APi to fetch events data.

### Features

- See events fetched from Google API
- Display number of events you want to see
- Search for a specific City
- See all the data displayed in charts

### What to do?
Before doing anything, of course, make sure Node and npm are available. To install node, plese visit: https://nodejs.org/en/download/

Then follow steps below

Run command to clone repository:

```
$ git clone https://github.com/gabriel524/meetup.git
```

After cloning the repo, you should install all dependencies

```
$ npm install
```

In your root project folder, just run

```
$ npm run start
```

After that, app should be automatically opened in `localhost:3000/meet`

---
## How to Use This App.
After completing the above stepts, when first opening the app, you will be prompted to sign in with Google in order to gain access to the Google Calendar API. Then, you can specify what city and how many events to view, and click on an event to view more details!


### Tech and Dependencies used:

```
HTML5
CSS3
Javascript (ES6)
React v18.2.0
AWS Lambda
Serverless
React-DOM
React-Scripts
Axios
NProgress
Recharts
```
---

##### Screenshot of the App:

<img src="public/img_readme/meet.png" style="display: inline-block; margin: 0 auto; max-width: 600px" alt="Meet app photo">

--- 

## A Note On Privacy.
The Meetup app requires you to sign in with Google in order to access the data from its Google Calendar. This access apply both ways, as Meetup can also access the user's calendar, Meanwhile it does not and will never be given this functionality. Rest assured, the app does not attempt to do anything with the Google user's information in any way. The app is also currently in the process of being verified, but this may take some time; Google has a lot on their plate.

## Feature: Show and Hide Event Details
As a user, I would like to be able to display and collapse event details so I can see more or less information depending on my preference.

-Scenario 1: 
Collapsed by Default
Given: User is on the main page.
When: Nothing is selectedh.
Then: The even details will collapsed.

-Scenario 2: 
Expanding the details
Given: User wants to see more about an event.
When: The user clicks on that event button.
Then: The details for that event will expand.

-Scenario 3: 
Collapse the details
Given: User has seen the details and wants to collapse.
When: The user clicks on the expanded details.
Then The details will collapse again.

## Feature: Specify number of Events
As a user I should be able to choose the number of events I want to see

-Scenario 1: 
When: The user hasn’t specified a number, 32 is the default number. 
Given: The user searched for event results for a city.
When: The user choose no specific amount of search results.
Then: The default amount of search results per city will be 32.

-Scenario 2: 
The user can change the number of events they want to see. 
Given: the user opened the search results query 
When: the user changes the default number 
Then: the default number of results will be changed to what the users select.

## Feature: Use App when offline
As a user I would like to have the ability to access events even when offline

-Scenario 1: 
Show cached data when there’s no internet connection. 
Given: the app has no internet connection
When: the data is cached
Then: that data will be shown

-Scenario 2: 
Show error when user changes the settings (city, time range). 
Given: the user opened the settings tab
When: the user changes the settings
Then: an error will show

## Feature: Data Visualization
As a user I would like to see charts with the number of upcoming events in my city

-Scenario 1:
Show a chart with the number of upcoming events in each city.

Given: The user selected a city.

When: The user clicks on the city’s upcoming events button.

Then: A chart will list all upcoming events taking place in the city.

---

### Links:

[Github pages](https://gabriel524.github.io/meetup/)

