import React from "react";
import { Link } from "react-router-dom";
import { Button, CenterContainer } from "./ViewComponents";

function Home() {
  return (
    <CenterContainer>
      <Link to="/hangman">
        <Button width="300"> Play! </Button>
      </Link>
      <Link to="/categories">
        <Button width="300"> Categories </Button>
      </Link>
      <Link to="/scoreboard">
        <Button width="300"> Score board </Button>
      </Link>
    </CenterContainer>
  );
}

export default Home;
