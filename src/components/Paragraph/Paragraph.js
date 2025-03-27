import React from "react";
import DefaultSection from "../DefaultSection/DefaultSection";
import { useMediaQuery } from "react-responsive";
import "./Paragraph.css";

export default function Paragraph({
  children,
  tag: Tag = "p",
  marginTop = "14px",
  marginBottom = "40px",
  fontSize = "16px",
  fontSizeMobile = "14px",
  isSubtitle = false,
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });

  const finalFontSize = isSubtitle
    ? isMobile
      ? "16px"
      : "18px"
    : isMobile
    ? fontSizeMobile
    : fontSize;

  const styles = {
    p: {
      fontFamily: "Bai Jamjuree, sans-serif",
      color: "#0E0F17",
      fontWeight: "400",
      fontSize: finalFontSize,
      lineHeight: "150%",
      marginBottom: "0px",
    },
  };

  const createMarkup = (htmlContent) => ({ __html: htmlContent });

  return (
    <DefaultSection marginTop={marginTop} marginBottom={marginBottom}>
      <Tag className="paragraph" style={{ ...styles.p, marginTop, marginBottom }} dangerouslySetInnerHTML={createMarkup(children)} />
    </DefaultSection>
  );
}
