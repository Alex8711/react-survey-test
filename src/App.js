import React from "react";

import "./App.css";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Survey from "./components/survey/Survey";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/survey" component={Survey} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
