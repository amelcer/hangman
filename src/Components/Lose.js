import React from "react";
import { Link } from "react-router-dom";
import HomeButtonComponent from "./HomeButtonComponent";
import { Container, CenterContainer, Button } from "./ViewComponents";
function Lose({ setGameOver }) {
  const handleAgainClick = () => {
    setGameOver(false);
  };

  return (
    <Container>
      <HomeButtonComponent />
      <CenterContainer>
        You lose <br />
        <Link to="/hangman">
          <Button onClick={handleAgainClick} width="200">
            Again?
          </Button>
        </Link>
      </CenterContainer>
    </Container>
  );
}

export default Lose;
