import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";

const App = () => {
  const TRACKING_ID = "G-ZKL3ZBPB7Q";
  ReactGA.initialize(TRACKING_ID);

  //visited page

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  //track event
  const trackEvent = () => {
    alert("clicked ");
    ReactGA.event({
      category: 'User',
      action: 'Created an Account'
    });
    
  };

  
  return (
    <div>
      <h3>welcome in app</h3>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contactus">Contact us</Link>
      {/* button */}

      <button onClick={trackEvent}>click me</button>

      {/* //routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
