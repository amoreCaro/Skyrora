import React from "react";
import { useMediaQuery } from "react-responsive";
import { getField } from "./getField/getField";

export default function AllComponents({ attributes, setAttributes }) {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

  const containerStyle = {
    maxWidth: "640px",
    backgroundColor: "#fff",
    padding: isMobile ? "0px 12px" : "22px 48px",
  };

  return (
    <div class={containerStyle}>

      {getField("heading", 1, "Skyrora newsletter. Quarter 2-4, 2024 in review", setAttributes, "h1", "12px", "24px", "12px")}
      {getField("paragraph", 1, "A close look at the work carried out by Skyrora over the last few months", setAttributes, undefined, "18px", "0px","44px")}

      {getField("Image", "image", { imageUrl: "images/image-1.png", altText: "A beautiful image" }, setAttributes)}
      {getField("heading", 1, "A letter from our ceo", setAttributes, "h3", "0px", "12px")}
      {getField("paragraph", 1,  "Dear Skyrora!", setAttributes, undefined, "16px" ,"0px", "0px")}
      {getField("paragraph", "p", "As we bid farewell to another year, I am reminded of the extraordinary challenges we have faced and overcome together. Whether in the UK or Ukraine, each of you has shown remarkable courage, resilience, and dedication.", setAttributes)}
      {getField("paragraph", "p", "This year has tested us in ways we could never have imagined, yet it has also reinforced our unity and purpose. Your hard work and perseverance inspire me every day, and I am immensely proud of what we have achieved despite the uncertainty and fear that surround us.", setAttributes)}
      {getField("paragraph", "p", "Let us look to 2025 with hope and determina-tion. May it bring peace to those in Ukraine, stability to our operations, and continued strength to our team. Together, we can achieve greatness, no matter the obstacles.", setAttributes)}
      {getField("paragraph", "p", "Wishing you and your families a New Year filled with hope, health, and happiness.", setAttributes)}
      {getField("paragraph", "p", "With gratitude and respect,","16px" ,"0px", "0px", setAttributes)}
      {getField("paragraph", "p", " Volodymyr Levykin","16px" ,"0px", "0px", setAttributes)}
      {getField("paragraph", "p", "CEO Skyrora", "16px" ,"0px", "0px",setAttributes)}

      {getField("Divider", 0, { color: "#B8BDCC" }, setAttributes)}

      {getField("Image", "image", { imageUrl: "images/image-2.png", altText: "A beautiful image" }, setAttributes)}
      {getField("heading", 1, "First stage tank progress", setAttributes, "h3")}
      {getField("paragraph", "p", "In the battle against coronavirus, we have re-structured our manufacturing division and allocated engineering personnel to start producing face visors using 3D printing facilities and producing hand sanitiser according to the World Health Organisation’s Guidelines.", setAttributes)}

      {getField("Divider", 0, { color: "#B8BDCC" }, setAttributes)}

      {getField("Image", "image", { imageUrl: "images/image-3.png", altText: "A beautiful image" }, setAttributes)}

      {getField("heading", 1, "Engine testing and facility upgrades", setAttributes, "h3")}
      {getField("paragraph", "p", "In the battle against coronavirus, we have re-structured our manufacturing division and allocated engineering personnel to start producing face visors using 3D printing facilities and producing hand sanitiser according to the World Health Organisation’s Guidelines.", setAttributes)}
      {getField("button", "button", "More news", setAttributes)}
    </div>
  );
}
