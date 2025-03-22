import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { heading } = attributes; // test text in db
    const [ headingValue, setHeadingValue] = useState( heading | ''); // edit new value in db
    const index = attributes.index; // index of block
    setAttributes({ heading: headingValue }); // set new value in db

    return (
        <div>
           <TextControl
            label={index}
            value={headingValue}
            onChange={(e) => setHeadingValue(e.target.value)}
            />
        </div>
    );
}
a