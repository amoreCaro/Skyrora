import React from "react";
import { useMediaQuery } from "react-responsive";
import { getField } from "./getField/getField";

export default function AllComponents({ attributes, setAttributes }) {
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });

  const containerStyle = {
    maxWidth: "640px",
    backgroundColor: "#fff",
    padding: isMobile ? "0px 12px" : "22px 48px",
  };
  const marginValue = window.innerWidth < 430 ? "0px" : "24px";


  return (
    <div class={containerStyle}>
      {/* Title Section */}
      {getField("heading", 1, "Skyrora newsletter. Quarter 2-4, 2024 in review", setAttributes, "h1", marginValue, marginValue)}
      {getField("paragraph", 1, "A close look at the work carried out by Skyrora over the last few months", setAttributes, undefined, "", "18px", "30px", "40px", true)}

      {/* {getField("paragraph", 1, "A close look at the work carried out by Skyrora over the last few months", setAttributes, undefined, "18px", "16px", "0px", "40px")} */}

      {/* Item_1 */}
      {getField("Image", "image", { imageUrl: "images/image-1.png", altText: "A beautiful image" }, setAttributes)}
      {getField("heading", 1, "A letter from our ceo", setAttributes, "h3", "0px", "4px")}
      {getField("paragraph", 1, "Dear Skyrora!", setAttributes, undefined, "16px", "0px", "0px")}
      {getField("paragraph", 1, "As we bid farewell to another year, I am reminded of the extraordinary challenges we have faced and overcome together. Whether in the UK or Ukraine, each of you has shown remarkable courage, resilience, and dedication.", setAttributes, undefined, "16px", "20px", "0px")}
      {getField("paragraph", 1, "This year has tested us in ways we could never have imagined, yet it has also reinforced our unity and purpose. Your hard work and perseverance inspire me every day, and I am immensely proud of what we have achieved despite the uncertainty and fear that surround us.", setAttributes, undefined, "16px", "32px", "12px")}
      {getField("paragraph", 1, "Let us look to 2025 with hope and determina-tion. May it bring peace to those in Ukraine, stability to our operations, and continued strength to our team. Together, we can achieve greatness, no matter the obstacles.", setAttributes, undefined, "16px", "40px", "12px")}
      {getField("paragraph", 1, "Wishing you and your families a New Year filled with hope, health, and happiness.", setAttributes, undefined, "16px", "40px", "12px")}
      {getField("paragraph", 1, "With gratitude and respect, ", setAttributes, undefined, "16px", "24px", "0px")}
      {getField("paragraph", 1, "Volodymyr Levykin,", setAttributes, undefined, "16px", "8px", "0px")}
      {getField("paragraph", 1, "CEO Skyrora", setAttributes, undefined, "16px", "8px", "0px")}

      {/* Divider */}
      {getField("Divider", 0, { color: "#B8BDCC" }, setAttributes)}

      {/* Item_2 */}
      {getField("Image", "image", { imageUrl: "images/image-2.png", altText: "A beautiful image" }, setAttributes)}
      {getField("heading", 1, "First stage tank progress", setAttributes, "h3", "12px", "24px", "12px")}
      {getField("paragraph", "p", "In the battle against coronavirus, we have re-structured our manufacturing division and allocated engineering personnel to start producing face visors using 3D printing facilities and producing hand sanitiser according to the World Health Organisation’s Guidelines.", setAttributes)}
      {/* Divider */}
      {getField("Divider", 0, { color: "#B8BDCC" }, setAttributes)}
      {/* Item_3 */}
      {getField("Image", "image", { imageUrl: "images/image-3.png", altText: "A beautiful image" }, setAttributes)}
      {getField("heading", 1, "Engine testing and facility upgrades", setAttributes, "h3", "12px", "24px", "12px")}
      {getField("paragraph", "p", "In the battle against coronavirus, we have re-structured our manufacturing division and allocated engineering personnel to start producing face visors using 3D printing facilities and producing hand sanitiser according to the World Health Organisation’s Guidelines.", setAttributes)}
      {/* Button */}
      {getField("button", "button", "More news", setAttributes)}
    </div>
  );
}