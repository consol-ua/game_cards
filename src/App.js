import React from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/menu";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">Игра: Найди пару</div>
        <Menu />
        <div className="board">board</div>
      </div>
    </BrowserRouter>
  );
}
