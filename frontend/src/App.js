import { IoAccessibility } from "react-icons/io5";

import Navbar from "./components/Navbar"
import Home from "./pages/Home"

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (

    <Router>
      <div>
      <Navbar/>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
