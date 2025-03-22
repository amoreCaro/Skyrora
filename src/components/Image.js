import { useMediaQuery } from "react-responsive";
import DefaultSection from "./DefaultSection";
const Image = ({ src, alt }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

    const imageStyle = {
        objectFit: "cover",
        width: "100%",
        maxWidth: isMobile ? "280px" : "544px",
        height: "100%",
        height: isMobile ? "147px" : "285px",

    };

    return (
        <DefaultSection marginTop="" marginBottom="24px">
            <img src={src} alt={alt} style={imageStyle} />
        </DefaultSection>
    );
};

export default Image;
