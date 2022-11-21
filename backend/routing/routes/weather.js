var express = require("express");
var router = express.Router();

const {
  getWeatherDaily,
  getWeatherCurrent,
} = require("../controllers/weather");

// Запрос на gismeteoAPI
router.get("/daily", getWeatherDaily);
router.get("/now", getWeatherCurrent);

module.exports = router;
