import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, CenterContainer } from "./ViewComponents";

function Home() {
  useEffect(() => {
    const scores = localStorage.getItem("scores");
    if (scores === null) {
      localStorage.setItem("scores", JSON.stringify([]));
    }
  }, []);

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
