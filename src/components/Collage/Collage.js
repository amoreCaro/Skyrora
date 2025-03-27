import React from "react";
import { useMediaQuery } from "react-responsive";
import DefaultSection from "../DefaultSection/DefaultSection"; // Імпортуємо DefaultSection
import "./Collage.css"; // Make sure to import the CSS file

export default function Collage({ images }) {
    const isMobile = useMediaQuery({ query: "(max-width: 430px)" });

    // Функція для розбиття масиву зображень на групи
    const getImageRows = () => {
        const rows = [];
        let currentRow = [];

        // Перша група з 2 зображень
        currentRow.push(images[0]);
        currentRow.push(images[1]);
        rows.push(currentRow);
        currentRow = [];

        // Інші групи з 3 зображень
        for (let i = 2; i < images.length; i += 3) {
            rows.push(images.slice(i, i + 3));
        }

        return rows;
    };

    return (
        <DefaultSection>
            <div className="collage-grid"> {/* Added class here */}
                {getImageRows().map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        style={{
                            display: "grid",
                            gridTemplateColumns: rowIndex === 0
                                ? "repeat(2, 1fr)" // Перший рядок - два елементи, які займають всю ширину
                                : (isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)"), // Інші ряди з 3 колонками
                                gap: "8px",
                                minHeight: "110px",
                                height: "100%"
                        }}
                    >
                        {row.map((imgSrc, index) => (
                            <img
                                key={index}
                                src={imgSrc}
                                alt={`collage-image-${rowIndex}-${index}`}
                                style={{
                                    width: "100%",
                                    height: rowIndex === 0 ? "168px" : "100%", // Висота для першого ряду
                                    objectFit: "cover", // Для того щоб зображення не деформувались
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </DefaultSection>
    );
}
