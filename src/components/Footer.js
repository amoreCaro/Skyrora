import React from "react";
import Media from "./Media";
const Footer = () => {
    const footer = {
        backgroundColor: "#181B24",
        color: "#fff",
        padding: "25px 32px",
        fontFamily: "Bai Jamjuree, sans-serif",
        display: "flex",
        justifyContent: "center",
    };

    const footerContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        maxWidth: "640px",
        width: "100%",
    };

    return (
        <>
            <footer style={footer}>
                <div style={footerContainer}>
                    <Media />
                </div>
            </footer>
        </>
    );
};

export default Footer;