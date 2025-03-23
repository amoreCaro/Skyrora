import DefaultSection from "../DefaultSection/DefaultSection";

export default function save({ attributes }) {
    const { imageUrl, altText, caption } = attributes;

    return (
        <DefaultSection marginTop="" marginBottom = "24px">
            {imageUrl && <img src={imageUrl} alt={altText} style={{ maxWidth: '100%' }} />}
            {caption && <p dangerouslySetInnerHTML={{ __html: caption }} />}
        </DefaultSection>
    );
}
