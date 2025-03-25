import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Divider from "../Divider/Divider";
export const getField = (type, index, value, setAttributes) => {
    switch (type) {
        case "heading":
            return <Heading index={index} setAttributes={setAttributes}>{value}</Heading>;
        case "paragraph":
            return <Paragraph index={index} setAttributes={setAttributes}>{value}</Paragraph>;
        case "button":
            return <Button index={index} setAttributes={setAttributes}>{value}</Button>;
        case "Image":
            return <Image imageUrl={value.imageUrl} altText={value.altText} />;
        case "Divider":
            return <Divider color={value.color} />;
        default:
            return null;
    }
};

