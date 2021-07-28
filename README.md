
![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# Chord Journal

## Description

_Duration: 2 Week Sprint_

As a guitar teacher my students are constantly losing their charts of chords they are studying and in most cases I have to record myself playing each progression if the student wants to play along without me. This app solves the problem of chord chart storage and playback for students to not only study what I give them but find new chord progressions on their own.

To see the fully functional site, please visit: https://shielded-meadow-86839.herokuapp.com/#/home

## Screen Shot

![2021-07-28_13-40-23 (1) copy](https://user-images.githubusercontent.com/54006827/127380901-3ca63cd2-c654-45f7-a58e-8ed09e42ea2c.gif)


### Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

1. Create a database named 'chord_journal',
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Login/Register to app
2. Create new chord progression or select a saved progression
3. Update the chord progression and play each indivual chord as editing.
4. You also have the option to delete or add a specific chord if needed.
5. Hit the playback progression button to play the full progression.
6. Once the progression plays back you can pick up your instrument and play along with the rendered sounds that play in time with the chord display.
7. Go back to the main screen and play a new progression or select a saved progression to play along with


## Built With

List technologies and frameworks here
- React.js 
- node.js 
- express.js 
- javascript 
- Redux 
- Redux-Saga 
- Postgresql 
- Material UI 
- HTML 
- CSS 
- Howler.js 
- Tonal.js

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [alexkim251@yahoo.com]
