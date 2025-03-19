import React from "react";
import Logo from "./Logo";
import HeaderInfo from "./HeaderInfo";

const header = {
    backgroundColor: "#181B24",
    color: "#fff",
    padding: "25px 32px",
    fontFamily: "Bai Jamjuree, sans-serif",
    display: "flex",
    justifyContent: "center",
};

const headerContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    maxWidth: "640px",
    width: "100%",
};

export default function Header() {
    return (
        <header style={header}>
            <div style={headerContainer}>
                <Logo/>
                <HeaderInfo />
            </div>
        </header>
    );
}
