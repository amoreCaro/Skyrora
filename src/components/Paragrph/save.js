import { defaultSection } from './defaultSection';

export default function save({ attributes }) {
    const { paragraph } = attributes;

    return (
        <div style={defaultSection(8,4)}> 
            {paragraph && <h1 dangerouslySetInnerHTML={{ __html: paragraph }} />} 
        </div>
    );
}