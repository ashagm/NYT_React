import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchForm from "./pages/SearchForm";
import SearchResult from "./pages/SearchResult";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
       <Route exact path="/" component={SearchForm} /> 
       <Route exact path="/articles" component={SearchResult} />        
      </Switch>
    </div>
  </Router>
);

export default App;
