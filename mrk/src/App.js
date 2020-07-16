import React from "react";
import "./App.scss";

import Home from "./Home/Home";
import { Route, NavLink } from "react-router-dom";
import SocialStudies from "./SocialStudies/SocialStudies";
import MathPage from "./Math/Math";
import Events from "./Events/Events";
import Contact from "./Contact/Contact";
import About from "./About/About";

function App() {
  return (
    <div className="App">
      {/* <Home className="home" /> */}
      <Route exact path="/" component={Home} />
      <Route path="/social-studies" component={SocialStudies} />
      <Route path="/math" component={MathPage} />
      <Route path="/events" component={Events} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
