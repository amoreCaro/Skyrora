
import { useMediaQuery } from "react-responsive";
export default function Typography({ variant = "p", children, style = {}, modifiers = [] }) {
    const Tag = variant;
    const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

    const baseText = {
        color: "#181B24",
        fontWeight: "400",
        fontSize: isMobile ? "14px" : "16px",
        lineHeight: "100%",
        marginBottom: "24px",
    };

    const styles = {
        h1: {
            color: "#0E0F17",
            fontWeight: "700",
            fontSize: isMobile ? "21px" : "26px",
            lineHeight: "120%",
            textTransform: "uppercase",
            margin: "0px 0px 12px 0px",
        },
        h3: {
            color: "#181B24",
            fontWeight: isMobile ? "600" : "700",
            fontSize: isMobile ? "16px" : "21px",
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
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: isMobile ? "100%" : "150%",
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