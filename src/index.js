import React from "react";
import ReactDOM from "react-dom";
import Routing from "./routing";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
