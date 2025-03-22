import { useMediaQuery } from "react-responsive";
import DefaultSection from "./DefaultSection";
import React from "react";

function Paragraph({ children, variant = "body", marginTop = "16px", marginBottom = "16px" }) {
    const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

    const styles = {
        body: {
            fontFamily: "Bai Jamjuree, sans-serif",
            color: "#181B24",
            fontWeight: "400",
            fontSize: isMobile ? "14px" : "16px",
            lineHeight: "100%",
        },
        subtitle: {
            fontFamily: "Bai Jamjuree, sans-serif",
            color: "#0E0F17",
            fontWeight: "400",
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: isMobile ? "100%" : "150%",
            marginBottom: "0px",
        },
    };

    return (
        <DefaultSection marginTop="0px" marginBottom="16px">
            <p style={styles[variant]}>{children}</p>
        </DefaultSection>
    );
}

export default Paragraph;
