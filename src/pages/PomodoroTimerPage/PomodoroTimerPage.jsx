import "./PomodoroTimerPage.css";
import { PomodoroClock } from "../../components/PomodoroClock/PomodoroClock";
import PomodoroModal from "../../components/PomodoroModal/PomodoroModal";
import { useClockContextProvider } from "../../context/clock-context";
import { useState } from "react";

const PomodoroTimerPage = () => {
  const { clockState, clockDispatch } = useClockContextProvider();

  const [show, setShow] = useState(false);
  return (
    <>
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
        <PomodoroClock show={show} setShow={setShow} />
      </section>
      {show && <PomodoroModal setShow={setShow} />}
    </>
  );
};

export { PomodoroTimerPage };
