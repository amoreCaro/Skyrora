import { DefaultSection } from '../DefaultSection/DefaultSection';

export default function save({ attributes }) {
    const { heading } = attributes;

    return (
        // margin-bottom 8px on desktop, 4px on mobile
        <DefaultSection style={marginBottom = "16px"}>
            {heading && <h1 dangerouslySetInnerHTML={{ __html: heading }} />}
        </DefaultSection>
    );
}