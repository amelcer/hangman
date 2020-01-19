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
  pattern: "[A-Za-z]{1}",
  maxLength: 1,
  required: true
}))`
  padding: 10px;
  width: 200px;
  text-align: center;
`;

const InputPassword = styled.input.attrs(props => ({
  pattern: "[A-Za-z]{1,}",
  required: true
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

function Game() {
  const [isLoading, setLoading] = useState(true);
  const [tries, setTries] = useState(1);
  const [password, setPassword] = useState();
  const [showHint, setShowHint] = useState(false);
  const [guessedChar, setGuessedChar] = useState();
  const [guessedChars, setGuessedChars] = useState([]);
  const [missedChars, setMissedChars] = useState([]);
  const [tooltipRef, setToolTipRef] = useState();
  //const [passwordGuess, setPasswordGuess] = useState();
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        const { data } = response;
        const randomizedId = getRandomIndex(data.words.length);
        const wordLength = data.words[randomizedId].title.length;
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

  const inputChange = event => {
    event.target.value = event.target.value.toUpperCase();
  };

  const handlePasswordInput = event => {
    inputChange(event);
  };

  const handleCharGuessInput = event => {
    inputChange(event);
    setGuessedChar(event.target.value.toLowerCase());
  };

  const charGuess = event => {
    event.preventDefault();
    if (missedChars.includes(guessedChar.toUpperCase())) {
      ReactTooltip.show(tooltipRef);
    } else {
      const title = password.title.toLowerCase();
      const indexes = [];
      for (let i = 0; i < title.length; i++) {
        if (title[i] === guessedChar) indexes.push(i);
      }

      if (indexes.length > 0) {
        setGuessedChars([...guessedChars, guessedChar.toUpperCase()]);
      } else {
        if (tries - 1 === 0) {
          setTries(0);
          //endGame()
        } else {
          setMissedChars([...missedChars, guessedChar.toUpperCase()]);
          setTries(tries - 1);
        }
      }
    }
  };
  const passwordGuess = event => {
    event.preventDefault();
  };

  const hideToolTip = () => {
    setTimeout(() => {
      ReactTooltip.hide(tooltipRef);
    }, 1500);
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
          <Category> {password.category} </Category>
          <Tries> Tries left: {tries} </Tries>
          {showHint && <Hint> {password.hint}</Hint>}
          <PasswordContainer>
            {password.title
              .split("")
              .map(letter =>
                letter != " "
                  ? guessedChars.includes(letter.toUpperCase())
                    ? letter
                    : "_"
                  : " "
              )}
          </PasswordContainer>
          <Inputs>
            <Form onSubmit={charGuess}>
              <InputChar
                vlaue={guessedChar}
                onChange={handleCharGuessInput}
                data-tip
                data-event="submit"
                delayHide={200}
                data-for="usedChar"
                ref={ref => setToolTipRef(ref)}
              ></InputChar>
              <Button width="200">Guess a char!</Button>
              <ReactTooltip
                id="usedChar"
                type="error"
                effect="solid"
                afterShow={() => hideToolTip()}
              >
                <span>You have tried this char!</span>
              </ReactTooltip>
            </Form>
            <Form onSubmit={passwordGuess}>
              <InputPassword
                onChange={(inputChange, handlePasswordInput)}
              ></InputPassword>
              <Button width="200"> Guess password! </Button>
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
