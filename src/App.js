import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/home";
import Level1Container from "./components/level1/level1Container";
import Menu from "./components/menu/menu";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">Игра: Найди пару</div>
        <Menu />
        <Switch>  
          <Route path="/level1">
            <Level1Container/>
          </Route>
          <Route path="/level2">
            <div className="board">Level 2</div>
          </Route>
          <Route path="/level3">
            <div className="board">Level 3</div>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
