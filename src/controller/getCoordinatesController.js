const { getCoordinates } = require("../services/getCoordinateServices");

const express = require("express");
const router = express.Router();

router.route("/").get(getCoordinates);

module.exports = router;
