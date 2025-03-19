import React from "react";
import {
  Section,
  Container,
  Heading,
  Text,
  Img,
} from "@react-email/components";

const buttonWrapper = {
  paddingBottom: "64px"
};
const section = {
  backgroundColor: "#181B24",
  padding: "0px 48px",
};



const container = {
  maxWidth: "640px",
  backgroundColor: "#fff",
  padding: "0px 48px",

};
const firstContainer = {
  maxWidth: "640px",
  backgroundColor: "#fff",
  padding: "0px 48px",
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
  marginBottom: "24px",
};

const textLast = {
  ...text,
  marginBottom: "24px",
};

const buttonStyle = {
  backgroundColor: "#164BDC",
  color: "#FFFFFF",
  padding: "16px 80px",
  border: "none",
  fontSize: "16px",
  lineHeight: "140%",
  textTransform: "uppercase",
  cursor: "pointer",
  marginTop: "15px",
};

const divider = {
  border: "none",
  borderTop: "1px solid #B8BDCC",
  padding: "16px 0",
  margin: "4px",
};

function EmailTemplate() {
  return (
    <>
      <Section style={section}>
        <Container style={firstContainer}>
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
              As we bid farewell to another year, I am reminded of the
              extraordinary challenges we have faced and overcome together.
              Whether in the UK or Ukraine, each of you has shown remarkable
              courage, resilience, and dedication.
            </Text>
            <Text style={text}>
              This year has tested us in ways we could never have imagined, yet
              it has also reinforced our unity and purpose. Your hard work and
              perseverance inspire me every day, and I am immensely proud of
              what we have achieved despite the uncertainty and fear that
              surround us.
            </Text>
            <Text style={text}>
              Let us look to 2025 with hope and determination. May it bring
              peace to those in Ukraine, stability to our operations, and
              continued strength to our team. Together, we can achieve
              greatness, no matter the obstacles.
            </Text>
            <Text style={text}>
              Wishing you and your families a New Year filled with hope, health,
              and happiness.
            </Text>
            <Text style={textLast}>
              With gratitude and respect,
              <br />
              Volodymyr Levykin,
              <br />
              CEO Skyrora
            </Text>
          </div>
          <hr style={divider} />
        </Container>
      </Section>
      <Section style={section}>
        <Container style={container}>
          <div style={imageWrapper}>
            <Img
              src="images/image-2.png"
              alt="Skyrora newsletter image"
              style={image}
            />
          </div>
          <div style={textWrapper}>
            <Heading style={titleH3}>First stage tank progress</Heading>
            <Text style={textFirst}>
              In the battle against coronavirus, we have re-structured our
              manufacturing division and allocated engineering personnel to
              start producing face visors using 3D printing facilities and
              producing hand sanitiser according to the World Health
              Organisation’s Guidelines.
            </Text>
          </div>
          <hr style={divider} />
        </Container>
      </Section>
      <Section style={section}>
        <Container style={container}>
          <div style={imageWrapper}>
            <Img
              src="images/image-3.png"
              alt="Skyrora newsletter image"
              style={image}
            />
          </div>
          <div style={textWrapper}>
            <Heading style={titleH3}>Engine testing and facility upgrades</Heading>
            <Text style={textFirst}>
              In the battle against coronavirus, we have re-structured our
              manufacturing division and allocated engineering personnel to
              start producing face visors using 3D printing facilities and
              producing hand sanitiser according to the World Health
              Organisation’s Guidelines.
            </Text>

          </div>
          <div style={buttonWrapper}>
            <button style={buttonStyle}>More News</button>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default EmailTemplate;
