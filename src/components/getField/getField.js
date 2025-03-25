import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";

export const getField = (type, index, value, setAttributes) => {
    switch (type) {
        case "heading":
            return <Heading index={index} setAttributes={setAttributes}>{value}</Heading>;
        case "paragraph":
            return <Paragraph index={index} setAttributes={setAttributes}>{value}</Paragraph>;
        default:
            return null;
    }
};
