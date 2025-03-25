import DefaultSection from "../DefaultSection/DefaultSection";
import React from "react";

export default function Paragraph({
  children, 
  tag: Tag = "p", // Default to <p> if no tag is provided
  marginTop = "0px",
  marginBottom = "16px"
}) {
  const styles = {
    p: {
      fontFamily: "Bai Jamjuree, sans-serif",
      color: "#0E0F17",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "150%",
      marginBottom: "0px",
    }
  };

  return (
    <DefaultSection marginTop={marginTop} marginBottom={marginBottom}>
      <Tag style={{ ...styles.p, marginBottom, marginTop }}>
        {children}
      </Tag>
    </DefaultSection>
  );
}
