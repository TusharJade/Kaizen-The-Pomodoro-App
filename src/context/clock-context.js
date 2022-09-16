import { useReducer, useContext, createContext, useEffect } from "react";

const ClockContext = createContext(null);

const clockReducerFunc = (clockState, action) => {
  switch (action.type) {
    case "SET_MODES":
      return {
        ...clockState,
        modes: action.payload,
      };
    case "REAL_CLOCK":
      return {
        ...clockState,
        realClock: clockState.realClock - 1,
      };
    case "RUN_OR_STOP":
      return {
        ...clockState,
        runner: !clockState.runner,
      };
    case "WORK":
      return {
        ...clockState,
        realClock: clockState.worktime,
        runner: false,
      };
    case "SHORT_BREAK":
      return {
        ...clockState,
        realClock: clockState.shortBreak,
        runner: false,
      };
    case "LONG_BREAK":
      return {
        ...clockState,
        realClock: clockState.longBreak,
        runner: false,
      };
    case "RESET":
      return {
        ...clockState,
        realClock:
          action.payload === 0
            ? clockState.worktime
            : action.payload === 1
            ? clockState.shortBreak
            : clockState.longBreak,
        runner: false,
      };
    case "GO":
      return {
        ...clockState,
        progress:
          (action.payload === 0 &&
            clockState.realClock / (clockState.worktime / 100)) ||
          (action.payload === 1 &&
            clockState.realClock / (clockState.shortBreak / 100)) ||
          (action.payload === 2 &&
            clockState.realClock / (clockState.longBreak / 100)),
      };
    default:
      return clockState;
  }
};

const ClockContextProvider = ({ children }) => {
  const [clockState, clockDispatch] = useReducer(clockReducerFunc, {
    modes: 0,
    progress: 100,
    realClock: 0,
    worktime: 20,
    shortBreak: 15 * 60,
    longBreak: 30 * 60,
    runner: false,
  });

  console.log(clockState.progress);

  useEffect(() => {
    switch (clockState.modes) {
      case 0:
        return clockDispatch({ type: "WORK" });
      case 1:
        return clockDispatch({ type: "SHORT_BREAK" });
      case 2:
        return clockDispatch({ type: "LONG_BREAK" });
      default:
        break;
    }
  }, [clockState.modes]);
  return (
    <ClockContext.Provider value={{ clockState, clockDispatch }}>
      {children}
    </ClockContext.Provider>
  );
};

const useClockContextProvider = () => useContext(ClockContext);

export { ClockContextProvider, useClockContextProvider };
