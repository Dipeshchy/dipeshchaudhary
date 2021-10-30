import React from "react";
import "./App.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Route} from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Education from "./components/Education";
// import Services from './components/Services';
// import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
// import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/skills" component={Skill} />
        <Route exact path="/education" component={Education} />
        {/* <Route exact path="/services" component={Services} /> */}
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="/experience" component={Experience} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
