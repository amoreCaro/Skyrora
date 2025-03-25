import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { paragraph } = attributes; // test text in db
    const [ paragraphValue, setParagraphValue] = useState( paragraph | ''); // edit new value in db
    const index = attributes.index; // index of block
    setAttributes({ heading: paragraphValue }); // set new value in db

    return (
        <div>
           <TextControl
            label={index}
            value={paragraphValue}
            onChange={(e) => setParagraphValue(e.target.value)}
            />
        </div>
    );
}
