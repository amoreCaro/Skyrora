import React from "react";
import "./App.css";
import Header from "./components/Header";
import TitleSection from "./components/TitleSection";
import PostList from "./components/PostList";
import Footer from "./components/Footer"; 

export default function Layout() {
  return (
    <wrapper >
      {/* max width640px mobile 304 use const mobile */}
      <Header />
      <TitleSection />
      <PostList />
      <Footer />
    </wrapper>
  );
}