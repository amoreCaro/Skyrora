import React from "react";
import { useMediaQuery } from "react-responsive";

function DefaultSection({ children, marginTop, marginBottom }) {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

  const defaultSection = {
    marginTop: marginTop || "0px",
    marginBottom: marginBottom || "24px",
  };

  return <div style={defaultSection}>{children}</div>;
}

export default DefaultSection;
