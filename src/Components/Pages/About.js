import React from "react";
import Footer from "../Sections/Footer/Footer";
import Navbar from "../Sections/Navbar/Navbar";
import WelcomeMessage from "../Sections/Welcome/WelcomeMessage";

const About = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <WelcomeMessage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default About;
