const DefaultSection = ({ children }) => {
    const defaultSection = {
        marginTop: "0px",
        marginBottom: "24px"
    };
    
    return (
        <section style={defaultSection}>
            {children}
        </section>
    );
};

export default DefaultSection;
