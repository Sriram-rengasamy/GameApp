import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from "./game";
import FetchApp from "./api/fetchApp";
const Routing = () => {
  return (
    <div>
      <nav />
      <Router>
        <Link to="/">Game</Link>
        <Link to="/FetchApp"> Fetch API </Link>

        <Route path="/" exact component={Game} />
        <Route path="/FetchApp" component={FetchApp} />
      </Router>
    </div>
  );
};
export default Routing;
