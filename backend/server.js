const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutRoutes");

//express app
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/workouts", workoutRoutes);

//conect the DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`DB base connected`);
    //listen for req
    app.listen(process.env.PORT, () => {
      console.log(`listen in port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
