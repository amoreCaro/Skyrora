import React from "react";
import { Html, Head, Body, Section, Container, Heading, Text, Img } from "@react-email/components";

const EmailTemplate = () => {
  return (
    <Html>
      <Head />
      <Body>
        <Section style={section}>
          <Container style={container}>
            <div style={imageWrapper}>
              <Img
                src="images/image-1.png"
                alt="Skyrora newsletter image"
                style={image}
              />
            </div>
            <div style={textWrapper}>
              <Heading style={titleH3}>A letter from our CEO</Heading>
              <Text style={textFirst}>Dear Skyrora!</Text>
              <Text style={text}>
                As we bid farewell to another year, I am reminded of the extraordinary challenges we have faced and overcome together. Whether in the UK or Ukraine, each of you has shown remarkable courage, resilience, and dedication.
              </Text>
              <Text style={text}>
                This year has tested us in ways we could never have imagined, yet it has also reinforced our unity and purpose. Your hard work and perseverance inspire me every day, and I am immensely proud of what we have achieved despite the uncertainty and fear that surround us.
              </Text>
              <Text style={text}>
                Let us look to 2025 with hope and determination. May it bring peace to those in Ukraine, stability to our operations, and continued strength to our team. Together, we can achieve greatness, no matter the obstacles.
              </Text>
              <Text style={text}>Wishing you and your families a New Year filled with hope, health, and happiness.</Text>
              <Text style={textLast}>
                With gratitude and respect,<br />
                Volodymyr Levykin,<br />
                CEO Skyrora
              </Text>
            </div>
          <hr style={divider} />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

// Стилі
const section = {
  backgroundColor: "#181B24",
  padding: "24px 48px",
};

const container = {
  maxWidth: "640px",
  backgroundColor: "#fff",
  padding: "24px 48px",
};

const imageWrapper = {
  marginBottom: "24px",
  maxWidth: "544px",
  objectFit: "cover",
};

const image = {
  width: "100%",
  height: "100%",
};

const textWrapper = {
  paddingBottom: "24px",
};

const titleH3 = {
  color: "#181B24",
  fontWeight: "700",
  fontSize: "21px",
  lineHeight: "120%",
  textTransform: "uppercase",
};

const text = {
  color: "#181B24",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "100%",
  marginBottom: "30px",
};

const textFirst = {
  ...text,
  marginBottom: "24px", // Останній елемент без відступу
};
const textLast = {
  ...text,
  marginBottom: "24px", // Останній елемент без відступу
};
const divider = {
  border: "none",
  borderTop: "1px solid #B8BDCC",
  padding: "16px 0",

};

export default EmailTemplate;
