# Mongoose API Workshop - Exercise 1 - Prototyping

## Create an Express API Prototype (no Mongoose please!)

In the following set of exercises we want to create an API which manages flats.

We first want to create a prototype for our API. We will focus on just the application skeleton and make sure to create a base setup which works smoothly together with a frontend.

Therefore we will create an API which has already all relevant routes. But does not implement any logic inside these routes, just dummy data.

Once the integration works, we afterwards will implement Mongoose
(but not in this exercise!)

* Install express
* Setup a file server.js

* Implement middleware for parsing incoming JSON data:
    => app.use(express.json())
    => this makes sure, an incoming JSON body is parsed and stored in the global
    request variable req.body (making the data available in all routes)

* Create all following CRUD routes for a flat
    * GET /flat (=> get all flats)
    * GET /flat/:id (=> get single flat by ID)
    * POST /flat (=> create flat)
    * PATCH /flat/:id (=> update flat with given ID)
    * DELETE /flat/:id (=> remove flat with given ID)

* Implement dummy responses
    * All routes should return dummy JSON data
    * For routes POST & PATCH
        * console.log the received body (req.body)
    * For routes GET /flat/:id, PATCH /flat/:id, DELETE /flat/:id
        * console.log the received ID parameter

* Test your routes
    * Start your app with nodemon
    * Write Fetch statement for all your routes
        (you can write those in a javascript comment into your code file)
    * Test the fetch statements in the browser JS console
        * Check if you receive your dummy JSON response in the browser console
        * Check on the VSCode terminal, if you receive the URL parameters and the sent body


## BONUS TASK

* Create a file index.html and create the HTML boilerplate with emmet 
* Run the file with live-server
* Write your fetch statements in a script tag
    * advantage: easier to debug fetch than in the browser (autocompletion, syntax check, Live-Server updates, etc)
    * little disadvantage: More code setup needed

OR Advanced:
* Write a React App in which you can perform the four fetch operations
* Write the fetched data into the DOM (if you already had this in your React course)
