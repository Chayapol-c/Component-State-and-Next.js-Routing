import { SizeSelectionContainer, SizeContainer } from "./styled";
import _ from "lodash";

const SizeSelection = ({
  currentVariant,
  variants,
  selectedSize,
  setSelectedSize,
  updateStock,
  updateVariant,
}) => {
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
