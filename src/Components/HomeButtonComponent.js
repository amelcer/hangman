import React from "react";
import { Link } from "react-router-dom";
import { HomeButton } from "./ViewComponents";

function HomeButtonComponent() {
  return (
    <Link to="/">
      <HomeButton> Home </HomeButton>
    </Link>
  );
}

export default HomeButtonComponent;
