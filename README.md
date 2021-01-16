# Shopify Technical Challenge Submission

## [Check it out here](https://theshoppies2021.web.app)

## The Challenge

We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

- We'd like a simple to use interface that makes it easy to:
- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

## Technical Requirements
- Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.

## Description
A web application to nominate up to 5 movies for The Shoppies Award Show. Users can search for movies by name using the OMDB API, and select movies to add to their nomination list. This list also gets stored in the users browser, so that they can resume their nominations upon leaving the page. Upon submission users also recieve a shareable link that they can send to others to show their movie nominations.

## Features
- Search OMDB for movies by name and display the results
- Click on movie info button to search OMDB for movie information by imdbID, and display informational modal
- Add movie from search results to nomination list
- Disable nominate button for movies already included in nomination list
- Remove a movie from nomination list
- Save nomination list in local storage if user exits page
- Submit nomination list and return shareable link which others can use to view your nominated movies
- Display notifications (maximum submissions, empty submission, successful submission)
- Async loading for submission and API movie searching

## Technologies
- React
- Firebase (firestore and hosting)
- Ant Design (component library)

## Notes
- OMDB search by name in searchbar happens on enter/search button press rather than onChange callback to avoid 1000 request limit
- Use an express server to hide OMDB API key
- Firebase was used for shareable links rather than including imdbIDs in the url as further development in this project would require a central database for results, statistics, etc...
