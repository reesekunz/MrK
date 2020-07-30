import React from "react";
import "./App.scss";

import Home from "./Home/Home";
import { Route, NavLink } from "react-router-dom";
import SocialStudies from "./SocialStudies/SocialStudies";
import MathPage from "./Math/Math";
import Events from "./Events/Events";
import Contact from "./Contact/Contact";
import About from "./About/About";
import CurrentTopic from "./SocialStudies/CurrentTopic";
import Projects from "./SocialStudies/Projects";
import Vocab from "./SocialStudies/Vocab";
import Assignments from "./SocialStudies/Assignments";
import Assessments from "./SocialStudies/Assesments";
import IXL from "./SocialStudies/IXL";

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
      <Route path="/current-topic" component={CurrentTopic} />
      <Route path="/projects" component={Projects} />
      <Route path="/vocabulary" component={Vocab} />
      <Route path="/assignments" component={Assignments} />
      <Route path="/assessments" component={Assessments} />
      <Route path="/ixl" component={IXL} />{" "}
    </div>
  );
}

export default App;
