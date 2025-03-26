import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import AllComponents from "./components/AllComponents";
import Footer from "./components/Footer";

import { useMediaQuery } from "react-responsive";

export default function Layout() {
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });
  const containerStyle = {
    maxWidth: isMobile ? "100%" : "544px",

    backgroundColor: "#fff",
    padding: isMobile ? "32px 12px 48px 12px" : "22px 48px",
    margin: "0 auto",
    minHeight: "50vh"
  };

  return (
    <Wrapper >
      <Header />

      <div style={containerStyle} id="container">
        <AllComponents />
      </div>
      <Footer />
    </Wrapper>
  );
}
