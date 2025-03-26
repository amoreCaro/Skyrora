import React from "react";
import Media from "./Media";
import Menu from "./Menu";
import { useMediaQuery } from "react-responsive";
const Footer = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 430px)" });
    const footer = {
        backgroundColor: "#181B24",
        color: "#fff",
        padding: isMobile ? "16px 12px 32px 16px" : "25px 32px 25px 48px",
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
        flexDirection: "column",
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