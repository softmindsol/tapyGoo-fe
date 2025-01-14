import React from "react";

const CustomHeading = ({ headingText, fontSize, textColor, textAlign, fontWeight }) => {
  return (
    <h2
      className={`font-fontOutfit  ${fontSize ? fontSize : ""} ${
        textColor ? textColor : "text-textHeading"
      } ${textAlign ? textAlign : ""} ${fontWeight ? fontWeight : ""}`}
    >
      {headingText}
    </h2>
  );
};

export default CustomHeading;
