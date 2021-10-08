import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Lights Out</h1>
      <Board ncols={3} nrows={3} chanceLightStartsOn={0.25} />
    </div>
  );
}

export default App;
