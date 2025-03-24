import { TextControl } from "@wordpress/components";
import { useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
    const { heading } = attributes;
    const [headingValue, setHeadingValue] = useState(heading || ""); // Виправлено оператор

    return (
        <div>
            <TextControl
                label="Heading"
                value={headingValue}
                onChange={(value) => {
                    setHeadingValue(value); // Оновлюємо стан
                    setAttributes({ heading: value }); // Оновлюємо атрибут
                }}
            />
        </div>
    );
}
