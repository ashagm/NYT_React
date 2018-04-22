import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchForm from "./pages/SearchForm";
import SavedResult from "./pages/SavedResult";

const App = () => (
  <Router>
    <div className="App">
      <NavBar />
      <Switch>
       <Route exact path="/" component={SearchForm} /> 
       <Route exact path="/saved" component={SavedResult} />  
      </Switch>
    </div>
  </Router>
);

export default App;
