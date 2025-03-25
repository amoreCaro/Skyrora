import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";

export const getField = (type, index, value, setAttributes) => {
    switch (type) {
        case "heading":
            return <Heading index={index} setAttributes={setAttributes}>{value}</Heading>;
        case "paragraph":
            return <Paragraph index={index} setAttributes={setAttributes}>{value}</Paragraph>;
        case "button":
            return <Button index={index} setAttributes={setAttributes}>{value}</Button>;
        default:
            return null;
    }
};
