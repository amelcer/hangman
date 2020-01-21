import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ScoreBoard from "./ScoreBoard";
import Hangman from "./Hangman";
import Categories from "./Categories";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/hangman">
            <Hangman />
          </Route>
          <Route path="/scoreboard">
            <ScoreBoard />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
