// import { TextControl } from '@wordpress/components';
import DefaultSection from "../DefaultSection/DefaultSection";

export const Paragraph = ({ value, index, setAttributes }) => {
    const styles = {
        p: {
            fontFamily: "Bai Jamjuree, sans-serif",
            color: "#0E0F17",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "150%",
            // fontSize: isMobile ? "16px" : "18px",
            // lineHeight: isMobile ? "100%" : "150%",
            marginBottom: "0px",
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
            <p style={styles}>{value}</p>
        </DefaultSection>
    );
};