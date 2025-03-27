import React from "react";
import { useMediaQuery } from "react-responsive";
import DefaultSection from "../DefaultSection/DefaultSection"; // Імпортуємо DefaultSection

// Компонент BackgroundImage
export default function BackgroundImage({ backgroundImage }) {
    const isMobile = useMediaQuery({ query: "(max-width: 430px)" });

    return (
        <DefaultSection>
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: "100%",
                    height: isMobile ? "200px" : "244px", 
                }}
            >
            </div>
        </DefaultSection>
    );
}
