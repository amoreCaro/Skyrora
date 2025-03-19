import { useState } from "react";

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? "#0F3BAA" : "#164BDC",
    color: "#FFFFFF",
    maxWidth: "256px",
    height: "56px",
    width: "100%",
    border: "none",
    fontSize: "16px",
    lineHeight: "140%",
    textTransform: "uppercase",
    cursor: "pointer",
    marginTop: "15px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Click Me
    </button>
  );
};

export default Button;
