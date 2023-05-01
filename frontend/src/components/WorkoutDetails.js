export default function WorkoutDetails({ workout }) {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg):</strong>
        {workout.loads}
      </p>
      <p>
        <strong>Reps :</strong>
        {workout.createdAt}
      </p>
    </div>
  );
}
