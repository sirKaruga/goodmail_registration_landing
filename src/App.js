import React from "react";
import "./App.css";
import "./components/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import About from "./components/about";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
