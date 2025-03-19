import React from "react";
import Media from "./Media";
import Menu from "./Menu";
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
        maxWidth: "640px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    };

    const footerCopyright = {
        color: "#B8BDCC",
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "100%"
    };

    return (
        <>
            <footer style={footer}>
                <div style={footerContainer}>
                    <Media />
                    <Menu />
                    
                    <span style={footerCopyright}>© 2025 SKYRORA LIMITED</span>
                </div>
            </footer>
        </>
    );
};

export default Footer;