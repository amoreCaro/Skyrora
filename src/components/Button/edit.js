import { TextControl, ColorPalette } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { buttonText, buttonUrl, backgroundColor, textColor } = attributes;

    return (
        <div>
            <TextControl
                label="Button Text"
                value={buttonText}
                onChange={(value) => setAttributes({ buttonText: value })}
            />

            <TextControl
                label="Button URL"
                value={buttonUrl}
                onChange={(value) => setAttributes({ buttonUrl: value })}
            />

            <label>Background Color</label>
            <ColorPalette
                value={backgroundColor}
                onChange={(color) => setAttributes({ backgroundColor: color })}
            />

            <label>Text Color</label>
            <ColorPalette
                value={textColor}
                onChange={(color) => setAttributes({ textColor: color })}
            />
        </div>
    );
}
