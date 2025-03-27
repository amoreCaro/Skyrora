import React from "react";
import DefaultSection from "../DefaultSection/DefaultSection";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import List from "../List/List";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Collage from "../Collage/Collage";
import Divider from "../Divider/Divider";
import Quote from "../Quote/Quote"; // Import the Quote component

export const getField = (
  type,
  index,
  value,
  setAttributes,
  headingTag = "h2",
  fontSize = "16px",
  marginTop = "0px",
  marginBottom = "24px",
  isSubtitle = false
) => {
  switch (type) {
    case "heading":
      return (
        <Heading
          index={index}
          setAttributes={setAttributes}
          headingTag={headingTag}
          marginTop={marginTop}
          marginBottom={marginBottom}
        >
          {value}
        </Heading>
      );
    case "paragraph":
      return (
        <Paragraph
          index={index}
          setAttributes={setAttributes}
          fontSize={fontSize}
          marginTop={marginTop}
          marginBottom={marginBottom}
          isSubtitle={isSubtitle}
        >
          {value}
        </Paragraph>
      );
    case "List":
      return <List value={value} />;
    case "button":
      return (
        <Button index={index} setAttributes={setAttributes} marginTop={marginTop} marginBottom={marginBottom}>
          {value}
        </Button>
      );
    case "Image":
      return <Image imageUrl={value.imageUrl} altText={value.altText} />;
    case "Divider":
      return <Divider color={value.color} />;
    case "quote":
      return (
        <Quote person={value.person} position={value.position} />
      );
    case "collage":
      return (
        <Collage images={value.images} />
      );
    default:
      return null;
  }
};
