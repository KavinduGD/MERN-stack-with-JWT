const express = require("express");
const router = express.Router();

const {
  createWorkout,
  getAllWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

// get all workout
router.get("/", getAllWorkout);

// get all workout
router.get("/:id", getSingleWorkout);

// Post a new workout
router.post("/", createWorkout);

// delete a  workout
router.delete("/:id", deleteWorkout);

// Update a  workout
router.patch("/:id", updateWorkout);

module.exports = router;
