import React from "react";

const HeaderInfo = () => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div style={styles.headerInfo}>
                <span style={styles.headerInfoText}>April-December. Issue 8</span>
                <span style={styles.headerInfoText}>17 December, 2024</span>
                <div style={styles.headerInfoLine}></div>
            </div>
        </div>
    );
};

const styles = {
    headerInfo: {
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        alignItems: "end",
        height: "42px",
        position: "relative",
        paddingRight: "10px",
    },
    headerInfoText: {
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "100%",
        color: "#ccc",
    },
    headerInfoLine: {
        position: "absolute",
        right: "0",
        top: "0",
        height: "32px",
        width: "2px",
        backgroundColor: "#164BDC",
    },
};

export default HeaderInfo;
