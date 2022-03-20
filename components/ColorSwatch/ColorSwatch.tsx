import { Key } from "react";
import { VariantColor, VariantContainer } from "./styled";

const ColorSwatch = ({ uniqueColor, selectedVariant, updateVariant, size }: any) => {
  return (
    <VariantContainer id="swatch-container">
      {uniqueColor.map((ele: { color: string | undefined; }, i: Key | null | undefined) => (
        <VariantColor
          id={`color`}
          color={ele.color}
          key={i}
          onClick={() => updateVariant(i)}
          isSelected={selectedVariant.color === ele.color}
          size={size}
        />
      ))}
    </VariantContainer>
  );
};

export default ColorSwatch;
