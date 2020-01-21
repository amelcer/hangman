import React, { useState } from "react";
import Game from "./Game";
import Lose from "./Lose";
import Win from "./Win";
import { Container } from "./ViewComponents";
import styled from "styled-components";
import Timer from "./Timer";

const TimerContainer = styled.div`
  position: absolute;
  top: 160px;
  right: 50px;
  width: 140px;
  height: 100px;
  background: #dba100;
  border-radius: 20px;
`;

function Hangman() {
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [time, setTime] = useState(0);

  return (
    <Container>
      {gameOver && time > 0 ? (
        win ? (
          <Win time={time} setGameOver={setGameOver} />
        ) : (
          <Lose setGameOver={setGameOver} />
        )
      ) : (
        <Container>
          <TimerContainer>
            <Timer setTime={setTime} gameOver={gameOver} />
          </TimerContainer>
          <Game setGameOver={setGameOver} setWin={setWin} />
        </Container>
      )}
    </Container>
  );
}

export default Hangman;
