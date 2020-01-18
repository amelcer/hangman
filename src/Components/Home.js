import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  color: #fff !important;
  width: 300px;
  text-transform: uppercase;
  text-decoration: none;
  background: #60a3bc;
  padding: 20px;
  margin: 20px;
  border-radius: 50px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;

  &:hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

const Container = styled.div`
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <Container>
      <Link to="/game">
        <Button> Play! </Button>
      </Link>
      <Link to="/categories">
        <Button> Categories </Button>
      </Link>
      <Link to="/scoreboard">
        <Button> Score board </Button>
      </Link>
    </Container>
  );
}

export default Home;
