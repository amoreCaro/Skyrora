import React from "react";
import "./App.css";
import Header from "./components/Header";
import TitleSection from "./components/TitleSection"; // Ensure this file exists
import PostList from "./components/PostList"; // Ensure this file exists

function App() {
  return (
    <>
      <Header />
      <TitleSection />
      <PostList />
    </>
  );
}

export default App;
