import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeButtonComponent from "./HomeButtonComponent";
import { Button, CenterContainer, Container } from "./ViewComponents";
import {
  GameContainer,
  Category,
  Tries,
  Hint,
  PasswordContainer,
  Inputs,
  Form,
  InputChar,
  InputPassword,
  MissedCharsContainer
} from "./GameComponents";
import ReactTooltip from "react-tooltip";

const url = "http://www.mocky.io/v2/5ce287fe340000ad3a773515";

function Game({ setGameOver, setWin }) {
  const [isLoading, setLoading] = useState(true);
  const [tries, setTries] = useState(1);
  const [password, setPassword] = useState();
  const [showHint, setShowHint] = useState(false);
  const [guessedChar, setGuessedChar] = useState("");
  const [guessedChars, setGuessedChars] = useState([]);
  const [missedChars, setMissedChars] = useState([]);
  const [tooltipRef, setToolTipRef] = useState();
  const [guessedPassword, setGuessedPassword] = useState("");

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

  const handleGuessedChar = e => {
    setGuessedChar(e.target.value.toUpperCase());
  };

  const handleCharSubmit = e => {
    e.preventDefault();

    if (
      guessedChars.includes(guessedChar) ||
      missedChars.includes(guessedChar)
    ) {
      ReactTooltip.show(tooltipRef);
      setGuessedChar("");
    } else {
      const title = password.title.toUpperCase().replace(/\s/g, "");
      let passwordHasGuessedChar = false;
      for (let i = 0; i < title.length; i++) {
        if (title[i] === guessedChar) {
          passwordHasGuessedChar = true;
          break;
        }
      }

      if (passwordHasGuessedChar) {
        setGuessedChars([...guessedChars, guessedChar]);
        setGuessedChar("");

        const passwordChars = [...new Set(title.split("").map(x => x))]
          .sort()
          .join("");
        const guessedCharsToPassword = [...guessedChars, guessedChar]
          .sort()
          .join("");

        if (passwordChars === guessedCharsToPassword) {
          endGame(true);
        }
      } else {
        if (tries - 1 === 0) {
          endGame(false);
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
      endGame(true);
    } else {
      endGame(false);
    }
  };

  const endGame = win => {
    setWin(win);
    setGameOver(true);
  };

  return (
    <Container>
      <HomeButtonComponent />

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
                onChange={handleGuessedChar}
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
              />
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
          {}
        </GameContainer>
      )}
    </Container>
  );
}

export default Game;
