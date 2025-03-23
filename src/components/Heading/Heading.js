import React from "react";
import DefaultSection from "../DefaultSection/DefaultSection";

export default function Heading({
  headingType: Tag = "h1",
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

  return (
    <DefaultSection marginTop="0px" marginBottom="16px" >
      <Tag style={{ ...styles[Tag], marginBottom, marginTop }}>
        {children}
      </Tag>
    </DefaultSection>
  );
}
