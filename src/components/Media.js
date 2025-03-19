import React from 'react';
import { useState } from "react";

const Media = () => {
    const [hovered, setHovered] = useState(null);

    const media = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
    };
    
    const mediaItem = {
        width: "48px",  
        height: "48px", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        cursor: "pointer",
        flexShrink: 0, 
    };
    
    const mediaSvg = (index) => ({
        width: "100%",
        height: "100%",
        fill: hovered === index ? "#164BDC" : "white",
        transition: "fill 0.3s ease",
        objectFit: "contain",
    });
    

    const svgs = [
        // Instagram
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>,

        // Facebook
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.9993 23.3337C31.9993 18.567 28.0993 14.667 23.3327 14.667C18.566 14.667 14.666 18.567 14.666 23.3337C14.666 27.667 17.8077 31.242 21.9243 31.892V25.8253H19.7577V23.3337H21.9243V21.3837C21.9243 19.217 23.2243 18.0253 25.1743 18.0253C26.1494 18.0253 27.1243 18.242 27.1243 18.242V20.4087H26.041C24.9577 20.4087 24.6327 21.0587 24.6327 21.7087V23.3337H27.016L26.5827 25.8253H24.5244V32.0003C28.8577 31.3503 31.9993 27.667 31.9993 23.3337Z" />
        </svg>,
        // YouTube
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M38 14.167C37.5 12.5 36.333 11.333 34.667 10.833C31.833 10 24 10 24 10C24 10 16.167 10 13.333 10.833C11.667 11.333 10.5 12.5 10 14.167C9.167 17 9.167 24 9.167 24C9.167 24 9.167 31 10 33.833C10.5 35.5 11.667 36.667 13.333 37.167C16.167 38 24 38 24 38C24 38 31.833 38 34.667 37.167C36.333 36.667 37.5 35.5 38 33.833C38.833 31 38.833 24 38.833 24C38.833 24 38.833 17 38 14.167ZM21.5 30V18L30.5 24L21.5 30Z" />
        </svg>,
        // LinkedIn
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 17H19V34H14V17ZM16.5 10C14.84 10 13.5 11.34 13.5 13C13.5 14.66 14.84 16 16.5 16C18.16 16 19.5 14.66 19.5 13C19.5 11.34 18.16 10 16.5 10ZM22 17H27V19.64C27.64 18.5 29.08 17 31.5 17C35.58 17 37 19.5 37 23.5V34H32V25C32 23 31 22 29.5 22C27.5 22 27 23.5 27 25V34H22V17Z" />
        </svg>,
        // X (Twitter)
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 10H26L20 20L14 10H10L18 24L10 38H14L20 28L26 38H30L22 24L30 10Z" />
        </svg>
    ];

    return (
        <div style={media}>
            {svgs.map((svg, index) => (
                <div
                    key={index}
                    style={mediaItem}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                >
                    {React.cloneElement(svg, { style: mediaSvg(index) })}
                </div>
            ))}
        </div>
    );
};

export default Media;
