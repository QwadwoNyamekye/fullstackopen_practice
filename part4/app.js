const config = require("./utils/config");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const app = express();
const blogRouter = require("./controllers/blog");

mongoose.set("strictQuery", false);

logger.info("Connecting to ", config.MONGODB_URI);

mongoose
    .connect(config.MONGODB_URI)
    .then((result) => {
        logger.info(result);
        logger.info("connected to Mongo DB");
    })
    .catch((error) => {
        logger.info("Error Connecting to MongoDB: ", error.message);
    });

app.use(cors());
app.use(express.json())
app.use(middleware.requestLogger)
app.use("/api/blog", blogRouter);
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app;
