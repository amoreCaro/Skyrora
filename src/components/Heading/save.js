import { defaultSection } from './defaultSection';

export default function save({ attributes }) {
    const { heading } = attributes;

    return (
        // margin-bottom 8px on desktop, 4px on mobile
        <div style={defaultSection(8,4)}> 
            {heading && <h1 dangerouslySetInnerHTML={{ __html: heading }} />} 
        </div>
    );
}