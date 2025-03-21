
import { useMediaQuery } from "react-responsive";
const PostImage = ({ src, alt }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

    const imageWrapper = {
        maxWidth: isMobile ? "280px" : "544px",
        width: "100%",
        height: isMobile ? "147px" : "285px",
        margin: "0 auto"
    };
    
    const imageStyle = {
        objectFit: "cover",
        width: "100%",
        height: "100%",
    };

    return (
        <div style={imageWrapper}>
            <img src={src} alt={alt} style={imageStyle} />
        </div>
    );
};



export default PostImage;
