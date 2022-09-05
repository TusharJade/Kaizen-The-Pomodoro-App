import styled from "styled-components";
import { useEffect, useState } from "react";

const PomodoroClock = () => {
  const [time, setTime] = useState(110);
  const [progress, setProgress] = useState(22);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, active]);

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <>
      <OuterCircle>
        <TimerLine progress={progress}>
          <InnerCircle>
            <TimeText>{getTime(time)}</TimeText>
            <StartPause onClick={() => setActive((state) => !state)}>
              {active ? "Pause" : "Start"}
            </StartPause>
          </InnerCircle>
        </TimerLine>
      </OuterCircle>
    </>
  );
};

export { PomodoroClock };

const OuterCircle = styled.div`
  width: 19.4rem;
  height: 19.4rem;
  background-color: var(--white);
  margin: 1.7rem auto;
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
    #fad6b8 ${(props) => props.progress}%,
    transparent ${(props) => props.progress}%
  );
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

const InnerCircle = styled.div`
  width: 14.65rem;
  height: 14.65rem;
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
