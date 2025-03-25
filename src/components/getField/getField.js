import Edit from "../Heading/Heading";

export const getField = (type, index, value, setAttributes, values) => {
    switch (type) {
        case "heading":
            return <Edit value={value} index={index} setAttributes={setAttributes} />; 
        default:
            return null;
    }
};
