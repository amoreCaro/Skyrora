import React from "react";
import { useMediaQuery } from "react-responsive";
import DefaultSection from "./DefaultSection"; // Імпортуємо DefaultSection

export default function Divider({ style = {} }) {
    const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

    const dividerStyle = {
        border: "none",
        borderTop: "1px solid #B8BDCC",
        width: "100%",
        // padding: isMobile ? "12px 0px" : "16px 0px",
        display: "block",
        margin: "0 auto",
        transform: "translateY(50%)",
        ...style,
    };

    return (
        <DefaultSection marginTop="20px" marginBottom="20px">
            <hr style={dividerStyle} />
        </DefaultSection>
    );
}
