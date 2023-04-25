const express = require("express");
const router = express.Router()
const request = require("request");

router.get("/weather/:city", function(req, res) {
    const apiKey = "API_KEY";
    //To get your api key from openweather website.Simply sign up and click to my keys
    const city = req.params.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    request(url, function(error, response, body) {
      const weather = JSON.parse(body);
      res.render("weather", { weather: weather });
    });
  });
  module.exports = router ;