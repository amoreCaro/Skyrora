export default function Typography({ variant = "p", children, style = {}, modifiers = [] }) {
    const Tag = variant;

    const baseText = {
        color: "#181B24",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "100%",
        marginBottom: "24px",
    };

    const styles = {
        h1: {
            color: "#0E0F17",
            fontWeight: "700",
            fontSize: "26px",
            lineHeight: "120%",
            textTransform: "uppercase",
            margin: "0px 0 12px 0",
        },
        h3: {
            color: "#181B24",
            fontWeight: "700",
            fontSize: "21px",
            lineHeight: "120%",
            textTransform: "uppercase",
            margin: "0px",
        },
        p: {
            ...baseText,
        },
        span: {
            ...baseText,
        },
        subtitle: {
            color: "#0E0F17",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "150%",
            marginBottom: "0px",
        },
    };

    const modifierStyles = {
        textFirst: { marginBottom: "20px" },
        textLast: { margin: "40px 0px" },
    };

    const appliedStyles = {
        ...styles[variant],
        ...modifiers.reduce((acc, mod) => ({ ...acc, ...modifierStyles[mod] }), {}),
        ...style,
    };

    return <Tag style={appliedStyles}>{children}</Tag>;
}