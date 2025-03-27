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
      lineHeight: '100%',
      color: '#9FA3AF',
      textTransform: 'capitalize',
      margin: "4px 0px 0px 0px"
    },
    QuoteLine: {
      position: "absolute",
      left: "0",
      top: "0",
      height: "100%",
      width: "2px",
      backgroundColor: "#164BDC",
    },
    textContainer: {
      marginLeft: '12px', 
    }
  };

  return (
    <DefaultSection>
      <div style={{ position: 'relative' }}>
        <div style={styles.QuoteLine}></div>
        
        <div style={styles.textContainer}>
          <span style={styles.person}>{person}</span>
          <p style={styles.position}>{position}</p>
        </div>
      </div>
    </DefaultSection>
  );
}
