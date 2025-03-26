import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Divider from "../Divider/Divider";

export const getField = (type, index, value, setAttributes, headingTag = "h2", fontSize="16px", marginTop = "0px", marginBottom = "24px") => {
    switch (type) {
        case "heading":
            return (
                <Heading 
                    index={index} 
                    setAttributes={setAttributes} 
                    headingTag={headingTag} 
                    marginTop={marginTop} 
                    marginBottom={marginBottom}
                >
                    {value}
                </Heading>
            );
        case "paragraph":
            return <Paragraph index={index} setAttributes={setAttributes} fontSize={fontSize} marginTop={marginTop} marginBottom={marginBottom}>{value}</Paragraph>;
        case "button":
            return <Button index={index} setAttributes={setAttributes} marginTop={marginTop} marginBottom={marginBottom}>{value}</Button>;
        case "Image":
            return <Image imageUrl={value.imageUrl} altText={value.altText} />;
        case "Divider":
            return <Divider color={value.color} />;
        default:
            return null;
    }
};
