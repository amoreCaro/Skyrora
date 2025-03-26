import React from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "./Logo";
import HeaderInfo from "./HeaderInfo";

export default function Header() {
    const isMobile = useMediaQuery({ maxWidth: 430 });

    const header = {
        // height: isMobile ? "76px" : "112px",
        backgroundColor: "#181B24",
        color: "#fff",
        paddingBottom: "0px",
        fontFamily: "Bai Jamjuree, sans-serif",
        display: "flex",
        justifyContent: "center",
        padding: isMobile ? "24px 8px 16px 8px" : "24px 32px 30px"
        ,
    };

    const headerContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        maxWidth: "640px",
        width: "100%",
        paddingBottom: isMobile ? "0px" : "0"
    }

    return (
        <header style={header}>
            <div style={headerContainer}>
                <Logo />
                <HeaderInfo />
            </div>
        </header>
    );
}
