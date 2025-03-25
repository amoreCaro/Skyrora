import { TextControl, SelectControl } from "@wordpress/components";  
// TextControl - text input field for user input 
// SelectControl - field allowing users to choose from predefined options
import { useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
    const { heading, headingType, marginBottom, marginTop } = attributes;
    const [headingValue, setHeadingValue] = useState(heading || "");

    return (
        <DefaultSection style={{ marginTop, marginBottom }}>
            <TextControl
                label="Heading"
                value={headingValue}
                onChange={(value) => {
                    setHeadingValue(value);
                    setAttributes({ heading: value });
                }}
            />
            <SelectControl
                label="Heading Type"
                value={headingType || "h2"}
                options={[
                    { label: "H1", value: "h1" },
                    { label: "H2", value: "h2" },
                    { label: "H3", value: "h3" },
                    { label: "H4", value: "h4" },
                    { label: "H5", value: "h5" },
                    { label: "H6", value: "h6" }
                ]}
                onChange={(value) => setAttributes({ headingType: value })}
            />
        </DefaultSection>
    );
}
