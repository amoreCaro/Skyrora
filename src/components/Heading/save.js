import React from 'react';
import DefaultSection from '../DefaultSection/DefaultSection';

export default function Save({ attributes }) {
    if (!attributes) return null;

    const { heading, headingType, marginBottom, marginTop } = attributes;

    return (
        <DefaultSection style={{ marginBottom, marginTop }}>
            {heading && React.createElement(headingType || 'h2', {
                dangerouslySetInnerHTML: { __html: heading },
            })}
        </DefaultSection>
    );
}