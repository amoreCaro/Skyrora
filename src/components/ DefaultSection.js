import React from "react";
import { useMediaQuery } from "react-responsive";

export default function DefaultSection({ children }) {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

  const defaultSection = {
    marginTop: "0px",
    marginBottom: "0px",
    background: "#181B24",
    padding: isMobile ? "0px 8px" : "0px",
  };

  return <section style={defaultSection}>{children}</section>;
}
