import styled from "styled-components";
import { useEffect } from "react";
import { useClockContextProvider } from "../../context/clock-context";

const PomodoroClock = ({ show, setShow }) => {
  const { clockState, clockDispatch } = useClockContextProvider();

  useEffect(() => {
    if (clockState.runner && clockState.realClock > 0) {
      const interval = setInterval(() => {
        clockDispatch({ type: "REAL_CLOCK" });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [clockState.runner, clockState.realClock, clockDispatch]);

  useEffect(() => {
    clockDispatch({ type: "GO", payload: clockState.modes });
  }, [clockState.realClock, clockDispatch, clockState.modes]);

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <>
      <OuterCircle>
        <TimerLine progress={clockState.progress}>
          <InnerCircle>
            <TimeText>{getTime(clockState.realClock)}</TimeText>
            {clockState.realClock > 0 && (
              <StartPause
                onClick={() => clockDispatch({ type: "RUN_OR_STOP" })}
              >
                {clockState.runner ? "Pause" : "Start"}
              </StartPause>
            )}
            <Restart
              onClick={() =>
                clockDispatch({ type: "RESET", payload: clockState.modes })
              }
            >
              {clockState.realClock === 0 && "RESET"}
            </Restart>
          </InnerCircle>
        </TimerLine>
      </OuterCircle>
      <SettingIcn onClick={() => setShow(!show)}>
        <i class="fa-solid fa-gear"></i>
      </SettingIcn>
    </>
  );
};

export { PomodoroClock };

const OuterCircle = styled.div`
  width: 19.4rem;
  height: 19.4rem;
  background-color: var(--white);
  margin: 1.8rem auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(#4d31ff, #7662fe 150deg, #4d31ff);
  box-shadow: 0px 0px 18px 3px rgb(57, 35, 205);
`;

const TimerLine = styled.div`
  width: 16rem;
  height: 16rem;
  background: conic-gradient(
    #d0d0d0 ${(props) => props.progress}%,
    transparent ${(props) => props.progress}%
  );
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

const InnerCircle = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: #5239f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TimeText = styled.h3`
  font-size: 3.5rem;
  color: var(--white);
  font-weight: 600;
`;

const StartPause = styled.button`
  all: unset;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--white);
  cursor: pointer;
  letter-spacing: 4px;
`;

const Restart = styled(StartPause)`
  color: #050000ff;
`;

const SettingIcn = styled.div`
  font-size: 1.7rem;
  color: #e4e4e4;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
