const express = require("express");
const { errorHandlerServices } = require("../services/errorHandlerServices");
const router = express.Router();

router.route("/").all(errorHandlerServices);

module.exports = router;
