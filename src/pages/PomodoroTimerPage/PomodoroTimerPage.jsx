import { useState } from "react";
import "./PomodoroTimerPage.css";

const PomodoroTimerPage = () => {
  const [modes, setModes] = useState("Work");
  return (
    <section className="pomodoro-clock-section">
      <div className="pomodoro-text">Pomodoro clock</div>
      <div className="pomodoro-btns-container">
        <button
          className={`pomodoro-btns ${
            modes === "Work" ? "pomo-btn-active" : null
          }`}
          onClick={() => setModes("Work")}
        >
          Work
        </button>
        <button
          className={`pomodoro-btns ${
            modes === "Short break" ? "pomo-btn-active" : null
          }`}
          onClick={() => setModes("Short break")}
        >
          Short break
        </button>
        <button
          className={`pomodoro-btns ${
            modes === "Long break" ? "pomo-btn-active" : null
          }`}
          onClick={() => setModes("Long break")}
        >
          Long break
        </button>
      </div>
    </section>
  );
};

export { PomodoroTimerPage };
