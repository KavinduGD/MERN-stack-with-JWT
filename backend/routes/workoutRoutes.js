const express = require("express");
const router = express.Router();

const {
  createWorkout,
  getAllWorkout,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const requireAuth = require("../middleware/requireAuth");

//pahala routes wada kranna kalin auth middleware eka wada karanawa
//authonticate nm routes wada karanawa(token eka hari nm)
//nathnm error eka ywna token eka valid na kiyala
router.use(requireAuth);

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
