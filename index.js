// NodeJS: event-driven model for building fast & scalable network apps.
// MongoDB: data storage in flexible and JSON-like documents.
// Express: Node.js web application framework.
// CRUD: Create, Read, Update, & Delete. Basic web app operations.

// Require certain dependencies reference in the package.json - 
// require reads a JavaScript file, executes it, and returns the exports object.

// Creates an express application called app. App is top-level function which 
// has methods for routing HTTP requests, rendering HTML views, and configuring middleware.
const express = require("express");
const app = express();
// dotenv loads environment variables from the .env file which in this case
// returns the json configuration file to create a mongoDB database connection.
const dotenv = require("dotenv");
// Mongoose is a JavaScript object-oriented programming library for connecting 
// Node.js and MongoDB. It is schema-based.
const mongoose = require("mongoose");

// Reads and returns the model outputted by the TodoTask.js file. 
const TodoTask = require("./models/TodoTask");

// Configure dotenv.
dotenv.config();

// static is a middleware function serving static files with public
// being the directory where our stylesheet is stored.
// app.use(path, callback) mounts at path the middlware functions from callback.
app.use("/static", express.static("public"));

// Tells apps to use the middleware that parse incoming urlencoded payloads with the qs library.
// Specifically, this allows us to extract data from the form when added to the app.post body property.
app.use(express.urlencoded({ extended: true }));

// Connected to MongoDB.
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    // console.log prints to terminal.
    console.log("Connected to db!");
    // app.listen(path, callback) starts a UNIX socket and listens for connections.
    app.listen(3000, () => console.log("Server Up and running"));
});

// Creastes a views folder and .ejs file for javascript etyle code.
app.set("view engine", "ejs");

// GET method for non-confidential information submitted and appearing in browser URL.
// Information is able to be catched.
app.get("/", (req, res) => {
    // .find returns an instance of a Query. {} returns all objects. second argument is 
    // the callback fucntion.
    TodoTask.find({}, (err, tasks) => {
        // Render a view given the HTML and setting the local object todoTasks referenced
        // in the todo.ejs to tasks.
        res.render("todo.ejs", { todoTasks: tasks });
    });
});

// POST method routes HTTP POST requests to path '/' with specified callback.
app.post('/', async (req, res) => {
    // Create TodoTask object given the content from the request req body.
    const todoTask = new TodoTask({
        content: req.body.content
    });
    try {
        // Inserts new or updates object.
        await todoTask.save();
        res.redirect("/");
    } catch (err) {
        res.redirect("/");
    }
});

// .route returns instance of a single route that can handle distinct HTTP methods.
app 
    .route("/edit/:id")
    .get((req, res) => {
        const id = req.params.id;
        // find similar to above and explained above.
        TodoTask.find({}, (err, tasks) => {
            res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
        });
    })
    .post((req, res) => {
        const id = req.params.id;
        // .findByIdAndUpdate takes specific id, what to update (content), and the options.
        TodoTask.findByIdAndUpdate(id, { content: req.body.content }, err => {
            // Error handling.
            if (err) return res.send(500, err);
            res.redirect("/");
        });
    });

// route to remove route and remove specific id.
app.route("/remove/:id").get((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndRemove(id, err => {
        if (err) return res.send(500, err);
        res.redirect("/");
    });
});
