import DefaultSection from "../DefaultSection/DefaultSection";
import React from "react";
import { useMediaQuery } from "react-responsive";

export default function Paragraph({
  children,
  tag: Tag = "p", // Default to <p> if no tag is provided
  marginTop = "0px",
  marginBottom = "16px",
  fontSize = "16px" // Default font size
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });
  const styles = {
    p: {
      fontFamily: "Bai Jamjuree, sans-serif",
      color: "#0E0F17",
      fontWeight: "400",
      fontSize: isMobile ? "14px" : fontSize,
      lineHeight: isMobile ? "100%" : "150%",
      marginBottom: "0px",
    }
  };

  return (
    <DefaultSection marginTop={marginTop} marginBottom={marginBottom}>
      <Tag style={{ ...styles.p, marginTop, marginBottom }}>
        {children}
      </Tag>
    </DefaultSection>
  );
}
