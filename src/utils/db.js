const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongoDb is connected"))
  .catch((err) => console.log("mongoose error " + err));
