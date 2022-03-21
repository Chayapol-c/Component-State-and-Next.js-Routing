import styled from "styled-components";
// import { Props } from '../../pages/globalStyle'

const VariantContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

type Props = {
  color: string | undefined
  isSelected: boolean
  size: number
}

const VariantColor = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  border: ${(props) => (props.color === "#FFFFFF" ? "1" : "0")}px solid
    ${(props) =>
      props.color === "#FFFFFF" && !props.isSelected ? "#DEDEDE" : "#FFFFFF"};
  border-radius: 9999px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  outline: 2px solid ${(props) => (props.isSelected ? "#BEBEBE" : "#ffffff")};
  align-self: center;
  cursor: pointer;
  z-index: 999;
`;

export { VariantColor, VariantContainer };
