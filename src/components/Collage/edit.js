import { TextControl, ColorPalette } from "@wordpress/components";
import { useState } from "@wordpress/element";
import DefaultSection from "../DefaultSection/DefaultSection";


export default function Edit({ attributes, setAttributes }) {
    const { color } = attributes;

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "16px",
        background: "#F5F5F5",
        borderRadius: "8px",
    };

    return (
        <DefaultSection>
            <hr></hr>
        </DefaultSection>
    );
}
