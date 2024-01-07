import React from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ServiceList from "./components/Services/ServiceList";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <ServiceList />
    </Container>
  );
};

export default App;
