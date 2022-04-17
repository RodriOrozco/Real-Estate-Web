import React from "react";
import Hero from "./Components/Hero";
import NavBar from "./Components/Navbar";
import GlobalStyle from "./Styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero />
    </>
  );
}

export default App;
