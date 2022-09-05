import "./PomodoroTimerPage.css";
import { useState } from "react";
import { PomodoroClock } from "../../components/PomodoroClock/PomodoroClock";

const PomodoroTimerPage = () => {
  const [modes, setModes] = useState(0);
  return (
    <section className="pomodoro-clock-section">
      <div className="pomodoro-text">Pomodoro clock</div>
      <div className="pomodoro-btns-container">
        {["Work", "Short break", "Long break"].map((item, index) => {
          return (
            <button
              className={`pomodoro-btns ${
                modes === index ? "pomo-btn-active" : null
              }`}
              onClick={() => setModes(index)}
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>
      <PomodoroClock modes={modes} />
    </section>
  );
};

export { PomodoroTimerPage };
