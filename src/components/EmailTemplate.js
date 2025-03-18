import React from "react";
import { Html, Head, Body, Container, Heading, Text, Img } from "@react-email/components";

const EmailTemplate = () => {
  return (
    <Html>
      <Head />
      <Body style={section}>
        <Container style={container}>
          <Img
            src={require('../images/image-1.png').default}
            alt="Skyrora newsletter image"
            style={image}
          />
          <Heading style={title__h3}>
            A letter from our ceo
          </Heading>
          <Text style={text}>
            Dear Skyrora!
          </Text>
          <Text style={text}>
            As we bid farewell to another year, I am reminded of the extraordinary challenges we have faced and overcome together. Whether in the UK or Ukraine, each of you has shown remarkable courage, resilience, and dedication.
          </Text>
          <Text>
            This year has tested us in ways we could never have imagined, yet it has also reinforced our unity and purpose. Your hard work and perseverance inspire me every day, and I am immensely proud of what we have achieved despite the uncertainty and fear that surround us.
          </Text>
          <Text>
            Let us look to 2025 with hope and determina-tion. May it bring peace to those in Ukraine, stability to our operations, and continued strength to our team. Together, we can achieve greatness, no matter the obstacles.
          </Text>
          <Text>
            Wishing you and your families a New Year filled with hope, health, and happiness.
          </Text>
          <Text>
            With gratitude and respect,<br />
            Volodymyr Levykin,<br />
            CEO Skyrora
          </Text>

        </Container>
      </Body>
    </Html>
  );
};

const section = {
  backgroundColor: "#181B24",
  padding: "24px 48px"
};

const container = {
  maxWidth: "640px",
  backgroundColor: "#fff",
  padding: "48px"
};

const title__h1 = {
  color: "#0E0F17",
  fontWeight: "700",
  fontSize: "26px",
  lineHeight: "120%",
  textTransform: "uppercase",
};
const title__h3 = {
  color: "#181B24",
  fontWeight: "700",
  fontSize: "21px",
  lineHeight: "120%",
  textTransform: "uppercase",
};

const subtitle = {
  color: "#0E0F17",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "150%"
};

const text = {
  color: "#181B24",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "100%"
};

const image = {
  maxWidth: "544px",
  width: "100%",
  height: "285px"
};

export default EmailTemplate;
