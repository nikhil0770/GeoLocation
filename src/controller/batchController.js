const express = require("express");
const { batchService } = require("../services/batchServices");
const router = express.Router();

router.route("/").get(batchService);

module.exports = router;
