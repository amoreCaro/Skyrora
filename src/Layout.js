import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import AllComponents from "./components/AllComponents";
import Footer from "./components/Footer";

import { useMediaQuery } from "react-responsive";

export default function Layout() {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });
  const containerStyle = {
    maxWidth: isMobile ? "280px" : "544px",
    width: "100%",
    backgroundColor: "#fff",
    padding: isMobile ? "0px 12px" : "22px 48px",
    margin: "0 auto",
    minHeight: "50vh"
  };

  return (
    <Wrapper>
      <Header />

      <div style={containerStyle}>
        <AllComponents />
      </div>
      <Footer />
    </Wrapper>
  );
}
