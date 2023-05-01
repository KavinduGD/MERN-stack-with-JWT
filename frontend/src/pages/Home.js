import { useState, useEffect } from "react";

//component
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutFrom from "../components/WorkoutFrom";

//[] array means it only fires onces
export default function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      //responcse object eka enw
      const response = await fetch("/api/workouts");
      //onject eka json data knw(now we have array of objects)
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkout();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails
              key={workout._id}
              workout={workout}
            ></WorkoutDetails>
          ))}
      </div>

      <WorkoutFrom />
    </div>
  );
}
