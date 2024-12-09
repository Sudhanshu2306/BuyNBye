import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import AboutUs from "../pages/AboutUs"

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="display flex w-full h-screen items-center">
        <AboutUs />
      </div>
      <Footer className='' />
    </>
  );
}

export default AboutUs;