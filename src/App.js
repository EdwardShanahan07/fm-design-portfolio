import React from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  );
};

export default App;
