// This file serves as a module (referred to itself as module)
// and sets module.exports at the end so that __.require() functions
// can read and retrieve the exports output.

// Read, execute, and export obput of mongoose.
const mongoose = require('mongoose');
// Create a new schema called todoTaskSchema that will store a 
// require string content and date that defaults to now.
const todoTaskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// module.exports is what will be returned from this file.
// mongoose.model creates a model called TodoTask given the 
// todoTaskSchema defined above.
module.exports = mongoose.model('TodoTask', todoTaskSchema);