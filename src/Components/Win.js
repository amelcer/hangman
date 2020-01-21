import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeButtonComponent from "./HomeButtonComponent";
import {
  Container,
  CenterContainer,
  Button,
  NameInput,
  Form,
  Paragraph
} from "./ViewComponents";

function Win({ time, setGameOver }) {
  const [name, setName] = useState("");
  const [nameSet, setNameSet] = useState(false);

  const nameChange = e => {
    setName(e.target.value.toUpperCase().trim());
  };

  const submitScore = e => {
    e.preventDefault();

    let scores = JSON.parse(localStorage.getItem("scores"));
    const score = {
      name: name,
      time: time
    };
    scores.push(score);

    localStorage.setItem("scores", JSON.stringify(scores));
    setNameSet(true);
  };

  const handleAgainClick = () => {
    setGameOver(false);
  };

  return (
    <Container>
      <HomeButtonComponent />
      <CenterContainer>
        <Paragraph>
          Congratulations, you guessed password in {time} seconds
        </Paragraph>
        {!nameSet ? (
          <Form onSubmit={submitScore}>
            <Paragraph> Would you like to save your score?</Paragraph>
            <NameInput onChange={nameChange} value={name} />
            <Button> Save your score! </Button>
          </Form>
        ) : (
          <CenterContainer>
            <Paragraph> Your score is stored</Paragraph>
            <Link to="/scoreboard">
              <Button>See scoreboard!</Button>
            </Link>
            <Button onClick={handleAgainClick}>Play again</Button>
          </CenterContainer>
        )}
      </CenterContainer>
    </Container>
  );
}

export default Win;
