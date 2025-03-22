import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper"; 
import Header from "./components/Header";
import TitleSection from "./components/TitleSection";
import PostList from "./components/PostList";
import Footer from "./components/Footer"; 

export default function Layout() {
  return (
    <Wrapper>
      {/* max width 640px, mobile 304px use const mobile */}
      <Header />
      <TitleSection />
      <PostList />
      <Footer />
    </Wrapper>
  );
}
