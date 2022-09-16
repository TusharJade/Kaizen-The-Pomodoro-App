import "./PomodoroTimerPage.css";
import { PomodoroClock } from "../../components/PomodoroClock/PomodoroClock";
import { useClockContextProvider } from "../../context/clock-context";

const PomodoroTimerPage = () => {
  const { clockState, clockDispatch } = useClockContextProvider();
  return (
    <section className="pomodoro-clock-section">
      <div className="pomodoro-text">Pomodoro clock</div>
      <div className="pomodoro-btns-container">
        {["Work", "Short break", "Long break"].map((item, index) => {
          return (
            <button
              className={`pomodoro-btns ${
                clockState.modes === index ? "pomo-btn-active" : null
              }`}
              onClick={() =>
                clockDispatch({ type: "SET_MODES", payload: index })
              }
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>
      <PomodoroClock />
    </section>
  );
};

export { PomodoroTimerPage };
