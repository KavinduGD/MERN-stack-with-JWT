import { useState } from "react";

export default function WorkoutFrom() {
  const [title, setTitle] = useState("");
  const [loads, setLoads] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const hundleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, reps, loads };

    const response = await fetch("/api/workouts", {
      method: "POST",
      //json data valata convert karanawa object eka
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      //oya error property eka enne backend eken
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoads("");
      setReps("");
      setError(null);
      console.log("new workout added", json);
    }
  };

  return (
    <form className="create" onSubmit={hundleSubmit}>
      <h3>Add a New Workout</h3>
      <lable>Excersize Title: </lable>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <lable>Load (in kg): </lable>
      <input
        type="number"
        onChange={(e) => setLoads(e.target.value)}
        value={loads}
      />

      <lable>Reps: </lable>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Add Workout</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
}
