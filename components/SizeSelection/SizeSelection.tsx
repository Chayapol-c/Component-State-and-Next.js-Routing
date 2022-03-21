import { SizeSelectionContainer, SizeContainer } from "./styled";
import { IVariant } from "../../pages/globalStyle";
import _ from "lodash";

type SizeSelectionProps = {
  currentVariant: IVariant;
  variants: Array<IVariant>;
  selectedSize: string;
  updateVariant: (args0: string, args1: number) => void;
};

const SizeSelection = ({
  currentVariant,
  variants,
  selectedSize,
  updateVariant,
}: SizeSelectionProps) => {
  const uniqueSize = variants.filter(
    (ele) => ele.color == currentVariant.color
  );
  return (
    <SizeSelectionContainer>
      {uniqueSize.map((variant, i) => (
        <SizeContainer
          key={variant.size}
          disabled={variant.stock === 0}
          onClick={() => {
            updateVariant(variant.size, variant.stock);
          }}
          isSelected={selectedSize === variant.size}
        >
          {variant.size}
        </SizeContainer>
      ))}
    </SizeSelectionContainer>
  );
};

export default SizeSelection;
