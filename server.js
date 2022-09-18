const express = require("express");
const batchController = require("./src/controller/batchController");
const noResourceHandlerController = require("./src/controller/noResourceHandlerController");
const getCoordinatesController = require("./src/controller/getCoordinatesController");
const { config } = require("./src/utils/config");

const app = express();

app.use(express.json());
app.use("/api/geoCode", getCoordinatesController);
app.use("/api/batch", batchController);
app.use("*", noResourceHandlerController);

app.listen(config.PORT, () => console.log(`Server Running at ${config.PORT}`));
