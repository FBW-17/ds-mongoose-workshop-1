const express = require("express")
const api = express()

// USE JSON MIDDLEWARE, SO WE CAN CALL OUR API WITH FETCH & JSON DATA FROM THE BROWSER
api.use(express.json())

// CORS
api.use((req, res, next) => {
    res.set("ACCESS-CONTROL-ALLOW-ORIGIN", "*")
    res.set("ACCESS-CONTROL-ALLOW-HEADERS", "*")
    res.set("ACCESS-CONTROL-ALLOW-METHODS", "*")
    next()
})

// OPEN THE PORT
api.listen(3000, () => console.log("Listening on port 3000"))

// GET ALL FLATS
api.get("/flat", (req, res, next) => {
    res.send([{title: "Flat1"}, {title: "Flat2"}])
})

// GET ONE FLAT
api.get("/flat/:id", (req, res, next) => {
    let id = req.params.id
    console.log(id)
    res.send({name: "Fetched Flat"})
})

// CREATE FLAT
api.post("/flat", (req, res, next) => {
    let flatPosted = req.body
    console.log(flatPosted)
    res.send({name: "Created flat"})
})

// UPDATE FLAT
api.patch("/flat/:id", (req, res, next) => {
    let id = req.params.id
    let flatUpdate = req.body
    console.log(id)
    console.log(flatUpdate)
    res.send({name: "Updated flat"})
})

api.delete("/flat/:id", (req, res, next) => {
    let id = req.params.id
    console.log(id)
    res.send({name: "Deleted flat"})
})

/**
 * FETCH statements:
 * 
 * GET: fetch('http://localhost:3000/flat')
 * GET: fetch('http://localhost:3000/flat/15')
 * POST: fetch('http://localhost:3000/flat', {
             method: "POST", headers: {"Content-Type": "application/json"},
             body: JSON.stringify({rooms: 3, address: "Turmstraße 33"})
         })
   PATCH: fetch('http://localhost:3000/flat/15', {
             method: "PATCH", headers: {"Content-Type": "application/json"},
             body: JSON.stringify({firstname: "FirstnameNew", lastname: "LastnameNew"})
         })
   DELETE: fetch('http://localhost:3000/flat/7', { method: "DELETE" })
         })
*/
