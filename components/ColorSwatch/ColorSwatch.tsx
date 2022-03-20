import { VariantColor, VariantContainer } from "./styled";

const ColorSwatch = ({ uniqueColor, selectedVariant, updateVariant, size }) => {
  return (
    <VariantContainer id="swatch-container">
      {uniqueColor.map((ele, i) => (
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
