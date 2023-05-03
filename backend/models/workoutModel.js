const mongoose = require("mongoose");

const schema = mongoose.Schema;

const workoutSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },

    reps: {
      type: Number,
      required: true,
    },
    loads: {
      type: Number,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
//schema define the structure of a particular document
//model - apply the schema(structure) to a model
