import { useMediaQuery } from "react-responsive";
import DefaultSection from "../DefaultSection/DefaultSection";

export default function Edit({ attributes }) {
    const isMobile = useMediaQuery({ query: "(max-width: 320px)" });
    const { imageUrl, altText } = attributes;

    const imageStyle = {
        objectFit: "cover",
        width: "100%",
        maxWidth: isMobile ? "280px" : "544px",
        height: isMobile ? "147px" : "285px",
    };

    return (
        <DefaultSection marginBottom="24px">
            <img src={imageUrl} alt={altText} style={imageStyle} />
        </DefaultSection>
    );
}
