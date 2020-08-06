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
import Unit1 from "./SocialStudies/Vocabulary/Unit1";
import Unit2 from "./SocialStudies/Vocabulary/Unit2";
import Unit3 from "./SocialStudies/Vocabulary/Unit3";
import Unit4 from "./SocialStudies/Vocabulary/Unit4";
import Unit5 from "./SocialStudies/Vocabulary/Unit5";
import Unit6 from "./SocialStudies/Vocabulary/Unit6";
import Unit7 from "./SocialStudies/Vocabulary/Unit7";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import Favicon16 from "./images/favicon-16x16.png";
import Favicon32 from "./images/favicon-32x32.png";

const trackingId = "UA-174646350-1"; // Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Mr. Kunz' Classroom</title>
        <meta name="description" content="Showcasing projects I've built." />
        <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
        <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
      </Helmet>
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
      <Route path="/unit1" component={Unit1} />{" "}
      <Route path="/unit2" component={Unit2} />{" "}
      <Route path="/unit3" component={Unit3} />{" "}
      <Route path="/unit4" component={Unit4} />{" "}
      <Route path="/unit5" component={Unit5} />{" "}
      <Route path="/unit6" component={Unit6} />{" "}
      <Route path="/unit7" component={Unit7} />{" "}
    </div>
  );
}

export default App;
