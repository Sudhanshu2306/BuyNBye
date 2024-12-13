import React from "react";
import AboutUs from "../pages/AboutUs"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="display flex w-full h-full items-center">
        <AboutUs />
      </div>
      <Footer />
    </>
  );
}

export default About;