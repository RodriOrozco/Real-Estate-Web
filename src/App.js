import React, { useState } from "react";
import DropDown from "./Components/DropDown";
import Hero from "./Components/Hero";
import NavBar from "./Components/Navbar";
import InfoSection from "./Components/InfoSection";
import GlobalStyle from "./Styles/GlobalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <NavBar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <InfoSection />
    </>
  );
}

export default App;
