const mongoose = require("mongoose");

const schema = mongoose.Schema;

const workoutSchema = new schema(
  {
    title: {
      type: String,
      require: true,
    },

    reps: {
      type: Number,
      require: true,
    },
    load: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
//schema define the structure of a particular document
//model - apply the schema(structure) to a model
