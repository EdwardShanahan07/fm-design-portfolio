import React from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Services />
    </Container>
  );
};

export default App;
