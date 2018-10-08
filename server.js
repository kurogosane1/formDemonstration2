const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const api = require('./Router/Router.js');


const app = express();

// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use('', api);
// app.get("/", (req, res)=> {
//     res.send("Hello World");
// })


app.listen(PORT, function(){
    console.log("listening at port:"+ PORT);
});