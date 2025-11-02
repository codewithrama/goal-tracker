import Button from "./Button";

function GoalList({ goalArray, setGoalArray }) {
  function progressIncr(id) {
    setGoalArray((curItem) =>
      curItem.map((cu) =>
        cu.goalID === id && cu.initalProgress < 100
          ? { ...cu, initalProgress: cu.initalProgress + Number(10) }
          : cu
      )
    );
  }

  function progressDecr(id) {
    setGoalArray((curItem) =>
      curItem.map((cu) =>
        cu.goalID === id && cu.initalProgress > 0
          ? { ...cu, initalProgress: (cu.initalProgress -= Number(10)) }
          : cu
      )
    );
  }

  function deleteIcon(id) {
    setGoalArray((curItem) => curItem.filter((cu) => cu.goalID !== id));
  }

  function handleComplete(id) {
    setGoalArray((curItem) =>
      curItem.map((cu) => (cu.goalID === id ? { ...cu, completed: true } : cu))
    );
  }
  return (
    <>
      {goalArray.map((goal) => (
        <div className="goal-card" key={goal.goalID}>
          <h3 className={goal.completed ? "completed" : ""}>
            {goal.goalTitle}
          </h3>
          <p className="close" onClick={() => deleteIcon(goal.goalID)}>
            &times;
          </p>
          <p>{goal.goalDescription}</p>
          <progress
            value={goal.completed ? 100 : goal.initalProgress}
            max="100"
          ></progress>
          {!goal.completed && (
            <>
              <Button onclick={() => progressDecr(goal.goalID)}>-10%</Button>
              <Button onclick={() => progressIncr(goal.goalID)}>+10%</Button>
            </>
          )}
          <Button
            onclick={() => handleComplete(goal.goalID)}
            complete={goal.completed}
          >
            {goal.completed ? "✅ Completed" : "complete 🎉"}
          </Button>
        </div>
      ))}
    </>
  );
}

export default GoalList;
