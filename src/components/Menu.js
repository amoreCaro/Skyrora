const Menu = () => {
    const menuItems = [
        { id: 1, text: "terms of use", link: "/" },
        { id: 2, text: "privacy policy", link: "/about" },
        { id: 3, text: "unsubscribe", link: "/contact" },
    ];
    const menuList = {
        display: "flex",
        gap:"16px"
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
