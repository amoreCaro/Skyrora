const PostImage = ({ src, alt }) => {
    const imageWrapper = {
        maxWidth: "544px",
        objectFit: "cover",
    };

    const imageStyle = {
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
