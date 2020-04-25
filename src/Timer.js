import React, { useState, useEffect } from "react";

function Timer(props) {
  const [exerciseTime, setExerciseTime] = useState(props.time);
  const [isTrainingInProgress, setIsTrainingInProgress] = useState(false);

  function ChangeExercise(e) {
    const { value } = e.target;
    setExerciseTime(value);
  }

  useEffect(() => {
    if (exerciseTime > 0 && isTrainingInProgress === true) {
      setTimeout(() => {
        setExerciseTime(time => time - 1);
      }, 1000);
    } else if (exerciseTime === 0) {
      setIsTrainingInProgress(false);
    }
  }, [exerciseTime, isTrainingInProgress]);

  return (
    <div>
      <label>{props.name}</label>
      <input type="number" onChange={ChangeExercise} min="0"></input>
      <h2>Time Remaining for the Exercise: {exerciseTime}</h2>
      <button onClick={() => setIsTrainingInProgress(true)}>
        start {props.name}
      </button>
    </div>
  );
}

export default Timer;
