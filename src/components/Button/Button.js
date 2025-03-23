import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import DefaultSection from "../DefaultSection/DefaultSection";

const Button = ({ marginTop = "0px", marginBottom = "0px" }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {

    backgroundColor: isHovered ? "#0F3BAA" : "#164BDC",
    color: "#FFFFFF",
    maxWidth: isMobile ? "280px" : "256px",
    width: "100%",
    height: isMobile ? "48px" : "56px",
    border: "none",
    fontSize: "16px",
    lineHeight: "140%",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  return (
    <DefaultSection marginTop={marginTop} marginBottom={marginBottom}>
      <button
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        More news
      </button>
    </DefaultSection>
  );
};

export default Button;
