import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  HomeButton,
  Button,
  CenterContainer,
  Container
} from "./ViewComponents";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import Timer from "./Timer";

const url = "http://www.mocky.io/v2/5ce287fe340000ad3a773515";

const Tries = styled.div`
  position: absolute;
  right: 50px;
  top: 50px;
  background: #dba100;
  width: 140px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border-radius: 20px;
  font-size: 18px;
`;

const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-self: center;
  justify-self: center;
  justify-items: center;
  align-items: center;
  grid-template-rows: 0.5fr 1fr 1fr 2fr 1fr;
  grid-template-areas:
    "category"
    "hint"
    "password"
    "inputs"
    "missedChars";
`;
const Category = styled.h1`
  display: block;
  grid-area: category;
  margin: 0;
`;

const Hint = styled.div`
  grid-area: hint;
  background: white;
  color: black;
  padding: 20px;
  font-size: 18px;
`;

const PasswordContainer = styled.div`
  grid-area: password;
`;

const PasswordChar = styled.div`
  height: 40px;
  width: 30px;
  display: inline-block;
  margin: 1px;
  text-align: center;
`;

const InputChar = styled.input.attrs(props => ({
  type: "text",
  pattern: "[A-Za-z]{1}",
  maxLength: 1,
  required: true
}))`
  padding: 10px;
  width: 200px;
  text-align: center;
`;

const InputPassword = styled.input.attrs(props => ({
  required: true,
  type: "text"
}))`
  padding: 10px;
  width: 200px;
  text-align: center;
`;

const Form = styled.form`
  display: block;
`;

const Inputs = styled.div`
  grid-area: inputs;
  text-align: center;
`;
const MissedCharsContainer = styled.div`
  grid-area: missedChars;
`;

const TimerContainer = styled.div`
  position: absolute;
  top: 160px;
  right: 50px;
  width: 140px;
  height: 100px;
  background: #dba100;
  border-radius: 20px;
`;

function Game() {
  const [isLoading, setLoading] = useState(true);
  const [tries, setTries] = useState(1);
  const [password, setPassword] = useState();
  const [showHint, setShowHint] = useState(false);
  const [guessedChar, setGuessedChar] = useState("");
  const [guessedChars, setGuessedChars] = useState([]);
  const [missedChars, setMissedChars] = useState([]);
  const [tooltipRef, setToolTipRef] = useState();
  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(true);
  const [guessedPassword, setGuessedPassword] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        const { data } = response;
        const randomizedId = getRandomIndex(data.words.length);
        setPassword(data.words[randomizedId]);
        setTries(data.tries);
        setLoading(false);
      })
      .catch(() => {
        setLoading(true);
      });
  }, []);

  const getRandomIndex = maxValue => {
    const minValue = 1;
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  };

  const hideToolTip = () => {
    setTimeout(() => {
      ReactTooltip.hide(tooltipRef);
    }, 1500);
  };

  const handleCharInput = e => {
    setGuessedChar(e.target.value.toUpperCase());
  };

  const handleCharSubmit = e => {
    e.preventDefault();
    if (missedChars.includes(guessedChar)) {
      ReactTooltip.show(tooltipRef);
    } else {
      const title = password.title.toUpperCase();
      const indexes = [];
      for (let i = 0; i < title.length; i++) {
        if (title[i] === guessedChar) indexes.push(i);
      }

      if (indexes.length > 0) {
        setGuessedChars([...guessedChars, guessedChar]);
        setGuessedChar("");
      } else {
        if (tries - 1 === 0) {
          setTries(0);
          //endGame()
        } else {
          setMissedChars([...missedChars, guessedChar]);
          setTries(tries - 1);
          setGuessedChar("");
        }
      }
    }
  };
  const handleGuessedPassword = e => {
    setGuessedPassword(e.target.value.toUpperCase());
  };

  const handlePasswordSubmit = e => {
    e.preventDefault();
    if (password.title.toUpperCase() === guessedPassword) {
      alert("win");
    } else {
      alert("lose");
    }
  };

  return (
    <Container>
      <Link to="/">
        <HomeButton>Powrót</HomeButton>
      </Link>

      {isLoading ? (
        <CenterContainer>"Loading..."</CenterContainer>
      ) : (
        <GameContainer>
          <TimerContainer>
            <Timer setTime={setTime} runTimer={startTimer} />
          </TimerContainer>
          <Category> {password.category} </Category>
          <Tries> Tries left: {tries} </Tries>
          {showHint && <Hint> {password.hint}</Hint>}
          <PasswordContainer>
            {password.title
              .split("")
              .map(letter =>
                letter !== " "
                  ? guessedChars.includes(letter.toUpperCase())
                    ? letter
                    : "_"
                  : " "
              )}
          </PasswordContainer>
          <Inputs>
            <Form onSubmit={handleCharSubmit}>
              <InputChar
                type="text"
                value={guessedChar}
                onChange={handleCharInput}
                data-tip
                data-event="submit"
                data-for="usedChar"
                ref={ref => setToolTipRef(ref)}
              ></InputChar>
              <Button width="150">Guess char!</Button>
              <ReactTooltip
                id="usedChar"
                type="error"
                effect="solid"
                afterShow={() => hideToolTip()}
              >
                <span>You have tried this char!</span>
              </ReactTooltip>
            </Form>
            <Form onSubmit={handlePasswordSubmit}>
              <InputPassword
                type="text"
                value={guessedPassword}
                onChange={handleGuessedPassword}
              ></InputPassword>
              <Button width="150">Guess password!</Button>
            </Form>
            <Button
              width="150"
              color="#edb21c"
              onClick={() => setShowHint(!showHint)}
            >
              Show hint
            </Button>
          </Inputs>
          <MissedCharsContainer>
            Missed chars:
            {missedChars.map(v => `${v}, `)}
          </MissedCharsContainer>
        </GameContainer>
      )}
    </Container>
  );
}

export default Game;
