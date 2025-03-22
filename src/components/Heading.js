import React from 'react';
import DefaultSection from "./DefaultSection";

export default function Heading({ headingType: Tag = 'h1', children }) {
  const isMobile = window.innerWidth <= 320;

  const styles = {
    h1: {
      fontFamily: "Bai Jamjuree, sans-serif",
      color: "#0E0F17",
      fontWeight: "700",
      fontSize: isMobile ? "21px" : "26px",
      lineHeight: "120%",
      textTransform: "uppercase",
      margin: "0px 0px 12px 0px",
    },
    h3: {
      fontFamily: "Bai Jamjuree, sans-serif",
      color: "#181B24",
      fontWeight: isMobile ? "600" : "700",
      fontSize: isMobile ? "16px" : "21px",
      lineHeight: "120%",
      textTransform: "uppercase",
      margin: "0px",
    },
  };

  return (
    <DefaultSection marginBottom="medium">
      <Tag style={styles[Tag] || { margin: 0 }}>{children}</Tag>
    </DefaultSection>
  );
}