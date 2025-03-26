import React from "react";
import DefaultSection from "../DefaultSection/DefaultSection";

export default function Heading({
  headingTag = "h2",
  children,
  marginTop = "0px",   // Default marginTop is 0px
  marginBottom = "0px" // Default marginBottom is 0px
}) {
  const styles = {
    h1: {
      fontFamily: "Bai Jamjuree, sans-serif",
      color: "#0E0F17",
      fontWeight: "700",
      fontSize: "26px",
      lineHeight: "120%",
      textTransform: "uppercase",
      margin: "0px",
    },
    h2: {
      fontFamily: "Bai Jamjuree, sans-serif",
      color: "#14161D",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "120%",
      textTransform: "uppercase",
      margin: "0px",
    },
    h3: {
      fontFamily: "Bai Jamjuree, sans-serif",
      color: "#181B24",
      fontWeight: "700",
      fontSize: "21px",
      lineHeight: "120%",
      textTransform: "uppercase",
      margin: "0px",
    },
  };

  const Tag = headingTag;
  const appliedStyles = styles[Tag] || styles.h2;

  return (
    <DefaultSection marginTop={marginTop} marginBottom={marginBottom}>
      <Tag style={{ ...appliedStyles, marginBottom, marginTop }}>
        {children}
      </Tag>
    </DefaultSection>
  );
}
