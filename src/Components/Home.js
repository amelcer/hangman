import React from "react";
import { Link } from "react-router-dom";
import { Button, CenterContainer } from "./ViewComponents";

function Home() {
  return (
    <CenterContainer>
      <Link to="/game">
        <Button> Play! </Button>
      </Link>
      <Link to="/categories">
        <Button> Categories </Button>
      </Link>
      <Link to="/scoreboard">
        <Button> Score board </Button>
      </Link>
    </CenterContainer>
  );
}

export default Home;
