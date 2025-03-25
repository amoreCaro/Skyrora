import React from "react";
import DefaultSection from "../DefaultSection/DefaultSection";

export default function Heading({
  headingType = "h2",
  children,
  marginBottom = "0px",
  marginTop = "0px"
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

  const Tag = headingType;

  // Ensure styles fallback if headingType is not one of the predefined ones
  const appliedStyles = styles[Tag] || styles.h2; // Default to h2 if invalid tag

  return (
    <DefaultSection marginTop="0px" marginBottom="16px">
      <Tag style={{ ...appliedStyles, marginBottom, marginTop }}>
        {children}
      </Tag>
    </DefaultSection>
  );
}
