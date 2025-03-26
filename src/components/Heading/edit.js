import { TextControl, SelectControl } from '@wordpress/components';
import DefaultSection from "../DefaultSection/DefaultSection";

export const Text = ({ value, index, headingTag, setAttributes }) => {
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
        h2: {
            fontFamily: "Bai Jamjuree, sans-serif",
            color: "#14161D",
            fontWeight: "700",
            fontSize: "24px",
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

    const HeadingTag = headingType || "h2";

    return (
        <DefaultSection>
            <SelectControl
                label="Heading Tag"
                value={headingTag}
                options={[
                    { label: "H1", value: "h1" },
                    { label: "H2", value: "h2" },
                    { label: "H3", value: "h3" },
                ]}
                onChange={(newType) => setAttributes({ headingTag: newTag })}
            />
            <HeadingTag style={styles[HeadingTag]}>{value}</HeadingTag>
        </DefaultSection>
    );
};
