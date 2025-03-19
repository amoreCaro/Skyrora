import React from "react";
import "./App.css";
import Header from "./components/Header";
import TitleSection from "./components/TitleSection";
import PostList from "./components/PostList";
import Footer from "./components/Footer"; 

function App() {
  return (
    <>
      <Header />
      <TitleSection />
      <PostList />
      <Footer />
    </>
  );
}

export default App;
