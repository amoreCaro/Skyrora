import React from "react";
import DefaultSection from "../DefaultSection/DefaultSection";
import { useMediaQuery } from "react-responsive";

export default function Quote({ person, position }) {
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });

  const styles = {
    person: {
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '120%',
      color: '#0E0F17',
      textTransform: 'uppercase',
    },
    position: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '120%',
      color: '#9FA3AF',
      textTransform: 'capitalize',
    },
    QuoteLine: {
      position: "absolute",
      left: "0",
      top: "0",
      height: "100%",
      width: "2px",
      backgroundColor: "#164BDC",
    }
  };

  return (
    <DefaultSection>
      <div style={{ position: 'relative' }}>
        <div style={styles.QuoteLine}></div>
        <p style={styles.person}>{person}</p>
        <span style={styles.position}>{position}</span>
      </div>
    </DefaultSection>
  );
}
