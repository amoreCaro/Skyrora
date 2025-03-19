import React from "react";

export default function DefaultSection({ children }) {
    const defaultSection = {
        marginTop: "0px",
        marginBottom: "0px",
        background: "#181B24"
    };

    return <section style={defaultSection}>{children}</section>;
}
