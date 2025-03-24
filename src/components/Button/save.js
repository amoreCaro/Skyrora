import DefaultSection from "../DefaultSection/DefaultSection";

export default function save({ attributes }) {
    const { buttonText, buttonUrl, backgroundColor, textColor } = attributes;

    return (
        <DefaultSection marginTop="0px" marginBottom="24px">
            <button>
                <span
                    href={buttonUrl}
                    style={{
                        display: 'inline-block',
                        backgroundColor: backgroundColor,
                        color: textColor,
                        padding: '12px 24px',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        textAlign: 'center'
                    }}
                >
                    {buttonText}
                </span>
            </button>
        </DefaultSection>
    );
}
