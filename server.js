const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Seting up the environment
const app = express();
app.use(bodyParser.json());

//connecting to the database
const db = require("./config/keys").mongoURI;
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database Connected..."))
    .catch(err =>console.log(err));

//setting up the routes
const Bugs = require("./routes/api/routes");
app.use(Bugs);

//starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server started on port ${port}`));
