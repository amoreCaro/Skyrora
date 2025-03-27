import React from "react";
import { useMediaQuery } from "react-responsive";
import DefaultSection from "../DefaultSection/DefaultSection"; // Імпортуємо DefaultSection

export default function Collage({ images }) {
    const isMobile = useMediaQuery({ query: "(max-width: 430px)" });

    // Стилі для колажу
    const collageStyle = {
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)", // 2 колонки на мобільних, 3 на великих екранах
        gap: "10px", // Проміжок між зображеннями
    };

    return (
        <DefaultSection>
            <div style={collageStyle}>
                {images.map((imgSrc, index) => (
                    <img 
                        key={index}
                        src={imgSrc} 
                        alt={`collage-image-${index}`} 
                        style={{ width: "100%", height: "auto", borderRadius: "8px" }} 
                    />
                ))}
            </div>
        </DefaultSection>
    );
}
