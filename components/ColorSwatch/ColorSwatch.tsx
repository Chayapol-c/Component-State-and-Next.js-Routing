import { Key } from "react";
import { VariantColor, VariantContainer } from "./styled";
import { IVariant } from '../../pages/globalStyle'


type ColorSwatchProps = {
  uniqueColor: Array<any>,
  selectedVariant: IVariant,
  updateVariant: (arg0: any) => void,
  size: number,
}

const ColorSwatch = ({ uniqueColor, selectedVariant, updateVariant, size }: ColorSwatchProps) => {
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
