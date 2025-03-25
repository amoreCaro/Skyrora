import { TextControl, ColorPalette } from "@wordpress/components";
import { useState } from "@wordpress/element";
import DefaultSection from "../DefaultSection/DefaultSection";
import Button from "./Button";

export default function Edit({ attributes, setAttributes }) {
    const { buttonText, buttonUrl, backgroundColor, textColor } = attributes;

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "16px",
        background: "#F5F5F5",
        borderRadius: "8px",
    };

    const labelStyle = {
        fontSize: "14px",
        fontWeight: "600",
        color: "#333",
        marginBottom: "4px",
    };

    return (
        <DefaultSection>
            <div style={containerStyle}>
                {/* Input field to edit button text */}
                <div>
                    <label style={labelStyle}>Button Text</label>
                    <TextControl
                        value={buttonText}
                        onChange={(newText) => setAttributes({ buttonText: newText })}
                    />
                </div>

                {/* Input field to edit button URL */}
                <div>
                    <label style={labelStyle}>Button URL</label>
                    <TextControl
                        value={buttonUrl}
                        onChange={(newUrl) => setAttributes({ buttonUrl: newUrl })}
                    />
                </div>

                {/* Color picker for background */}
                <div>
                    <label style={labelStyle}>Background Color</label>
                    <ColorPalette
                        value={backgroundColor}
                        onChange={(newColor) => setAttributes({ backgroundColor: newColor })}
                    />
                </div>

                {/* Color picker for text */}
                <div>
                    <label style={labelStyle}>Text Color</label>
                    <ColorPalette
                        value={textColor}
                        onChange={(newColor) => setAttributes({ textColor: newColor })}
                    />
                </div>

                {/* Button Component */}
                <Button
                    text={buttonText}
                    url={buttonUrl}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                />
            </div>
        </DefaultSection>
    );
}
