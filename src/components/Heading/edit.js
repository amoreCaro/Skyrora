// import { TextControl } from '@wordpress/components';
import DefaultSection from "../DefaultSection/DefaultSection";

export const Text = ({ value, index, setAttributes }) => {
    const styles = {
        h1: {
            fontFamily: "Bai Jamjuree, sans-serif",
            color: "#0E0F17",
            fontWeight: "700",
            fontSize: "26px",
            lineHeight: "120%",
            textTransform: "uppercase",
            margin: "0px",
        },
        h3: {
            fontFamily: "Bai Jamjuree, sans-serif",
            color: "#181B24",
            fontWeight: "700",
            fontSize: "21px",
            lineHeight: "120%",
            textTransform: "uppercase",
            margin: "0px",
        },
    };
    return (

        // <TextControl
        //     label={index}
        //     value={value}
        //     className="form-control form-text"
        //     onChange={(newValue) => setAttributes({ [index]: newValue })}
        // />
        <DefaultSection>
            <h2 style={styles}>{value}</h2>
        </DefaultSection>
    );
};