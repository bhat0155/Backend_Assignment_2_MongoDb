"use strict";

require("dotenv/config");

const express = require("express");
const roundRouter = require("./routers/roundRouter");
const courseRouter=require("./routers/courseRouter")
const { errorHandler } = require("./utils/error");
require("./utils/db");

const app = express();
app.use(express.json());

app.use("/api/rounds", roundRouter);
app.use("/api/courses", courseRouter);


app.get("/", (_req, res) => {
  res.send("Server running ⛳️⛳️⛳️");
});

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url} - ${new Date()}`);
  next();
});

// added this from reference video of Tim
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
