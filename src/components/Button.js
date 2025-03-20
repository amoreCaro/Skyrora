import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Button = () => {
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
    margin: isMobile ? "16px 0px" : "20xp 0px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      More news
    </button>
  );
};

export default Button;
