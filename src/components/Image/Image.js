import { useMediaQuery } from "react-responsive";
import DefaultSection from "../DefaultSection/DefaultSection";

const Image = ({ imageUrl, altText }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

    const imageStyle = {
        objectFit: "cover",
        width: "100%",
        maxWidth: isMobile ? "280px" : "544px",
        height: isMobile ? "147px" : "285px",
        // height: "100%"
    };

    return (
        <DefaultSection marginTop="" marginBottom="24px">
            <img src={imageUrl} alt={altText} style={imageStyle} />
        </DefaultSection>
    );
};

export default Image;

