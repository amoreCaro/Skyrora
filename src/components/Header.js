import React from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "./Logo";
import HeaderInfo from "./HeaderInfo";

export default function Header() {
    const isMobile = useMediaQuery({ maxWidth: 320 });

    const header = {
        height: isMobile ? "76px" : "112px",
        backgroundColor: "#181B24",
        color: "#fff",
        padding: isMobile ? "8px" : "25px 32px",
        fontFamily: "Bai Jamjuree, sans-serif",
        display: "flex",
        justifyContent: "center",
    };

    const headerContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        maxWidth: isMobile ? "304px" : "640px",
        width: "100%",
    };

    return (
        <header style={header}>
            <div style={headerContainer}>
                <Logo />
                <HeaderInfo />
            </div>
        </header>
    );
}
