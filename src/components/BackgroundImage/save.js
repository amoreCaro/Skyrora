import DefaultSection from "../DefaultSection/DefaultSection";

export default function save({ attributes }) {
    const { color } = attributes;

    return (
        <DefaultSection marginTop="0px" marginBottom="24px">
            <hr></hr>
        </DefaultSection>
    );
}
