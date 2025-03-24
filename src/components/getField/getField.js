import Edit from "../Heading/Heading"; // Імпортуємо правильний компонент

export const getField = (type, index, value, setAttributes, values) => {
    switch (type) {
        case "heading":
            return <Edit value={value} index={index} setAttributes={setAttributes} />; // Використовуємо Edit
        default:
            return null;
    }
};
