const express = require("express");
router = express.Router();

weather = require("./weather");

router.use("/weather", weather);

module.exports = router;
