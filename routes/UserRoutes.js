const express = require('express');
const fs = require("fs");  // for file upload
const UserController = require('../controllers/userController.js'); // importing user controller

const users = express.Router();


// Define a route for the root URL ("/")
users.get('/', async (req, res) => {
    res.redirect('/feed');
});




// page that lists all users
users.get("/users", UserController.getAllUsers);

   
// register the user

users.post("/register", UserController.register);

// page that displays user details
// is now implemented into getUserFeed 
//users.get("/users/:id", UserController.getUserProfile); 

module.exports = users;

