const express = require("express");
const {
  noResourceHandlerServices,
} = require("../services/noResourceHandlerServices");
const router = express.Router();

router.route("/").all(noResourceHandlerServices);

module.exports = router;
