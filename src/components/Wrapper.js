const wrapperStyle = {
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: "#181B24"
};

export default function Wrapper({ children }) {
    return (
        <div style={wrapperStyle}>
            {children}
        </div>
    );
}
