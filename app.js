const express = require("express");
const request = require("request");
const app = express();
app.set('view engine','ejs')
const routes=require('./routes')
app.use(express.json());
app.use(routes);


app.listen(3000, function() {
    console.log("Server started on port 3000.");
  });