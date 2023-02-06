import React from "react";
import About from "./About";
import homepageVideo from "./assets/homepageVideo.mp4";
import Contact from "./Contact";
import Footer from "./Footer";
import "./Main.css";
import Services from "./Services";
const Homepage = () => {
  return (
    <>
        <video id="video" autoPlay loop muted>
          <source src={homepageVideo} type="video/mp4" />
        </video>  
        <br/>
        <Services/>
        <br/>
        <About/>
        <br/>
        <Contact/>
      <br/>
        <Footer/>

    </>
  );
};

export default Homepage;
