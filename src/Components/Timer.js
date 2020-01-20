import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Clock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

const Time = styled.p`
  font-size: 18px;
  width: 100%;
`;

function Timer({ setTime, runTimer }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (runTimer) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!runTimer && seconds !== 0) {
      setTime(seconds);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds, runTimer]);

  return (
    <Clock>
      <Time> {seconds} seconds </Time>
    </Clock>
  );
}

export default Timer;
