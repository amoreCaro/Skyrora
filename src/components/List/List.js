import React from "react";
import DefaultSection from "../DefaultSection/DefaultSection";
import { useMediaQuery } from "react-responsive";

export default function List({ value = "", className = "", margin = "0px 8px" }) {
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });
  const styles = {
    fontFamily: "Bai Jamjuree, sans-serif",
    fontWeight: "400",
    fontSize: isMobile ? "14px" : "16px",
    lineHeight: "120%",
    margin,
    color: "#0E0F17",  
  };

  return (
    <DefaultSection margin={margin}>
      <ul className={className} style={styles}>
        <li style={{ listStyleType: "disc", listStylePosition: "inside" }}>
          {value}
        </li>
      </ul>
      <style jsx>{`
        ul {
          list-style-type: none; 
          padding-left: 0;
        }

        li::marker {
          color: #164BDC; 
        }
      `}</style>
    </DefaultSection>
  );
}
