import React, { useState, useEffect } from 'react';

export default function TimeTracker({ task, onUpdateTime }) {
  const [timeSpent, setTimeSpent] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timerStart, setTimerStart] = useState(0);

  useEffect(() => {
    let timer;
    if (isTimerActive) {
      timer = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isTimerActive]);

  useEffect(() => {
    if (!isTimerActive) {
      onUpdateTime(task.id, timeSpent);
    }
  }, [isTimerActive, timeSpent, task.id, onUpdateTime]);

  const startTimer = () => {
    setIsTimerActive(true);
    setTimerStart(Date.now() - timeSpent * 1000); 
  };

  const stopTimer = () => {
    setIsTimerActive(false);
  };

  const resetTimer = () => {
    setTimeSpent(0);
    setIsTimerActive(false);
  };

  return (
    <div className="timer-container">
      <div className='timer'>
        <h5>Time Spent: {Math.floor(timeSpent / 60)}m {timeSpent % 60}s</h5>
      </div>
      <button   onClick={startTimer} disabled={isTimerActive}>
        Start Timer
      </button>
      <button   onClick={stopTimer} disabled={!isTimerActive}>
        Stop Timer
      </button>
      <button   onClick={resetTimer} disabled={isTimerActive}>
        Reset Timer
      </button>
    </div>
  );
}
