import React from "react";
import { useMediaQuery } from "react-responsive";
const Menu = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 320px)" });
    const menuItems = [
        { id: 1, text: "terms of use", link: "/#" },
        { id: 2, text: "privacy policy", link: "/#" },
        { id: 3, text: "unsubscribe", link: "/#" },
    ];
    const menuList = {
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px"
    };
    const menuItem = {
        listStyle: "none",
    };
    const menuItemLink = {
        textTransform: "uppercase",
        textDecoration: "none",
        color: "#fff",
        fontSize: "12px",
        lineHeight: "100%",
        fontWeight: "400",
        transition: "color 0.3s ease",
    };

    return (
        <ul style={menuList}>
            {menuItems.map((item) => (
                <li key={item.id} style={menuItem}>
                    <a href={item.link} style={menuItemLink}>
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
