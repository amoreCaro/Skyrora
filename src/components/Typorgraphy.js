import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import  DefaultSection  from "./DefaultSection";

export default function Typography({ variant = "p", children, style = {} }) {
    const Tag = variant;
    const isMobile = useMediaQuery({ query: "(max-width: 430px)" });

    const ref = useRef(null);
    const [position, setPosition] = useState("");

    useEffect(() => {
        if (variant !== "p" || !ref.current) return;

        const parent = ref.current.parentElement;
        if (!parent) return;

        const pTags = Array.from(parent.children).filter((el) => el.tagName.toLowerCase() === "p");

        if (pTags.length === 1) {
            setPosition("textOnly");
            return;
        }

        if (pTags[0] === ref.current) {
            setPosition("textFirst");
        } else if (pTags[pTags.length - 1] === ref.current) {
            setPosition("textLast");
        } else {
            setPosition("textMiddle");
        }
    }, [variant, ref]);

    const baseText = {
        fontFamily: "Bai Jamjuree, sans-serif",
        color: "#181B24",
        fontWeight: "400",
        fontSize: isMobile ? "14px" : "16px",
        lineHeight: "100%",
        marginBottom: "24px",
    };

    const styles = {
        h1: {
            fontFamily: "Bai Jamjuree, sans-serif",
            color: "#0E0F17",
            fontWeight: "700",
            fontSize: isMobile ? "21px" : "26px",
            lineHeight: "120%",
            textTransform: "uppercase",
            margin: "0px 0px 12px 0px",
        },
        h3: {
            fontFamily: "Bai Jamjuree, sans-serif",
            color: "#181B24",
            fontWeight: isMobile ? "600" : "700",
            fontSize: isMobile ? "16px" : "21px",
            lineHeight: "120%",
            textTransform: "uppercase",
            margin: "0px",
        },
        p: { ...baseText },
        span: { ...baseText },
        subtitle: {
            fontFamily: "Bai Jamjuree, sans-serif",
            color: "#0E0F17",
            fontWeight: "400",
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: isMobile ? "100%" : "150%",
            marginBottom: "0px",
        },
    };

    const positionStyles = {
        textFirst: { marginTop: "20px", marginBottom: "16px" },
        textMiddle: { marginBottom: "16px" },
        textLast: { marginTop: "40px" },
        textOnly: { margin: "20px 0px" },
    };

    const appliedStyles = {
        ...styles[variant],
        ...(positionStyles[position] || {}),
        ...style,
    };

    return (
        <DefaultSection>
            <Tag ref={variant === "p" ? ref : null} style={appliedStyles}>
                {children}
            </Tag>
        </DefaultSection>
    );
}
