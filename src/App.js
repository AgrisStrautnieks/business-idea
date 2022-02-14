import React from "react";
import "./App.css";
import Navbar from "./containers/Navbar/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/home/home";
import About from "./containers/about/about";
import Services from "./containers/services/services";
import Contacts from "./containers/contact/contacts";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </Router>
  );
}

export default App;
