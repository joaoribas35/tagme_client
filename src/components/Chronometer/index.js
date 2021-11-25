import { useState, useEffect } from "react";

const Chronometer = () => {
  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    let interval = null;

    if (startTimer) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!startTimer) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [startTimer]);

  console.log("time", time);

  return (
    <div className="Timers">
      <h2>Stopwatch</h2>

      <div id="buttons">
        {!startTimer && time === 0 && (
          <button onClick={() => setStartTimer(true)}>Start</button>
        )}
        {startTimer && (
          <button onClick={() => setStartTimer(false)}>Stop</button>
        )}
        {!startTimer && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!startTimer && time > 0 && (
          <button onClick={() => setStartTimer(true)}>Resume</button>
        )}
      </div>
    </div>
  );
};

export default Chronometer;
