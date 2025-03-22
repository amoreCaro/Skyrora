export default function Wrapper({ children, maxWidth = "640px", margin = "0 auto", backgroundColor = "red" }) {
    return (
        <div style={{ maxWidth, margin, backgroundColor }}>
            {children}
        </div>
    );
}
