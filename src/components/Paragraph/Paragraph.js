import React, { useState } from "react";
import DefaultSection from "../DefaultSection/DefaultSection";
import { useMediaQuery } from "react-responsive";

export default function Paragraph({
  children,
  tag: Tag = "p", // Default tag is <p>
  marginTop = "14px", // Default marginTop = 14px
  marginBottom = "40px", // Default marginBottom = 40px
  fontSize = "16px", // Default fontSize for desktop = 16px
  fontSizeMobile = "14px", // Default fontSize for mobile = 14px
  isSubtitle = false, // Default value for isSubtitle
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" }); // Check for mobile screens

  // Logic to adjust font size based on whether it's a subtitle or not
  const finalFontSize = isSubtitle
    ? isMobile
      ? "16px" // 16px on mobile for subtitle
      : "18px" // 18px on desktop for subtitle
    : isMobile
    ? fontSizeMobile // Use the mobile font size if it's not a subtitle
    : fontSize; // Use the default font size for desktop

  const styles = {
    p: {
      fontFamily: "Bai Jamjuree, sans-serif",
      color: "#0E0F17",
      fontWeight: "400",
      fontSize: finalFontSize,
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
