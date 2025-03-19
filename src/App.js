import React from "react";
import "./App.css";
import Header from "./components/Header";
import TitleSection from "./components/TitleSection"; // Ensure this file exists
import EmailTemplate from "./components/EmailTemplate"; // Ensure this file exists

function App() {
  return (
    <>
      <Header />
      <TitleSection />
      <EmailTemplate />
    </>
  );
}

export default App;
