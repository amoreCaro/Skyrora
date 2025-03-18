import React from "react";
import "./App.css";
import Header from "./components/Header";
import TitleSection from "./components/TitleSection";
import EmailTemplate from "./components/EmailTemplate";

function App() {
  return (
    <div className="App">
      <Header />
      <TitleSection />
      <EmailTemplate />
    </div>
  );
}

export default App;
