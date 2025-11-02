import { useState } from "react";
import Button from "./Button";

function AddGoalForm({ setGoalArray, setIsAddForm }) {
  const [goalTitle, setGoalTitle] = useState("");
  const [goalDescription, setGoalDescription] = useState("");
  const [initalProgress, setInitalProgress] = useState(0);

  const newArray = {
    goalID: crypto.randomUUID(),
    goalTitle,
    goalDescription,
    initalProgress,
    completed: false,
  };

  function handleGoalArray(e, newArray) {
    if (!goalTitle || !goalDescription) return;
    e.preventDefault();
    setGoalArray((curItem) => [...curItem, newArray]);
    console.log(newArray);
    setIsAddForm(false);
  }

  return (
    <>
      <form
        className="add-goal-form"
        onSubmit={(e) => handleGoalArray(e, newArray)}
      >
        <h3>Add New Goal</h3>

        <label>Goal Title</label>
        <input
          type="text"
          value={goalTitle}
          onChange={(e) => setGoalTitle(e.target.value)}
          placeholder="Enter goal title"
        />
        <br />
        <label>Goal Description</label>
        <textarea
          placeholder="Enter goal description"
          value={goalDescription}
          onChange={(e) => setGoalDescription(e.target.value)}
        ></textarea>
        <br />

        <label>inital progress(%)</label>
        <input
          type="text"
          placeholder="0"
          max="100"
          value={initalProgress}
          onChange={(e) => setInitalProgress(Number(e.target.value))}
        />
        <br />
        <Button type="submit">Save Goal</Button>
      </form>
    </>
  );
}

export default AddGoalForm;
