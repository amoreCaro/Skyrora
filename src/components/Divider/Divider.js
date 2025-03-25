import React from "react";
import { useMediaQuery } from "react-responsive";
import DefaultSection from "../DefaultSection/DefaultSection"; // Імпортуємо DefaultSection

export default function Divider({ color = "#B8BDCC", style = {} }) {
    const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

    const dividerStyle = {
        border: "none",
        borderTop: `1px solid ${color}`,
        width: "100%",
        display: "block",
        margin: "0 auto",
        transform: "translateY(50%)",
        padding: "32px 0px",
        ...style,
    };

    return (
        <DefaultSection marginTop="0px" marginBottom="0px">
            <hr style={dividerStyle} />
        </DefaultSection>
    );
}
