import React from 'react';
import { DefaultSection } from '../DefaultSection/DefaultSection';

export default function save({ attributes }) {
    const { paragraph } = attributes;

    return (
        <DefaultSection marginTop="0px" marginBottom="16px"> 
            {paragraph && <p dangerouslySetInnerHTML={{ __html: paragraph }} />} 
        </DefaultSection>
    );
}