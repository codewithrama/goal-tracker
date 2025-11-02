import "./App.css";
import Button from "./Button";
import AddGoalForm from "./AddGoalForm";
import Greeting from "./Greeting";
import GoalList from "./GoalList";
import { useState } from "react";
function App() {
  const [isAddForm, setIsAddForm] = useState(false);
  const [goalArray, setGoalArray] = useState([]);

  function handleAddNewGoal() {
    setIsAddForm((curState) => !curState);
  }
  return (
    <div className="App">
      <Greeting />
      <Button onclick={handleAddNewGoal}>
        {isAddForm ? "close" : " ✨Add New Goal"}
      </Button>
      {isAddForm && (
        <AddGoalForm setGoalArray={setGoalArray} setIsAddForm={setIsAddForm} />
      )}
      {goalArray.length !== 0 && (
        <GoalList goalArray={goalArray} setGoalArray={setGoalArray} />
      )}
    </div>
  );
}

export default App;
