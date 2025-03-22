import React from "react";
import { useMediaQuery } from "react-responsive";

const margin = {
  large: "24px",
  medium: "16px",
  small: "12px",
  xsmall: "8px",
  xxsmall: "4px",
};

function DefaultSection({ children, marginBottom = {margin}, marginTop = "0px" }) {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

  const defaultSection = {
    marginTop,
    marginBottom: margin[marginBottom] || margin.large,
  };

  return <div style={defaultSection}>{children}</div>;
}

export default DefaultSection;
