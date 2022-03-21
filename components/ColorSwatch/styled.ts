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
  border: 1px solid ${props => props.color=== "#FFFFFF" ? "#DEDEDE" : "transparent"};
  border-radius: 9999px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  outline: 2px solid ${(props) => (props.isSelected ? "#BEBEBE" : "#ffffff")};
  outline-offset: 2px;
  align-self: center;
  cursor: pointer;
  z-index: 999;
`;

export { VariantColor, VariantContainer };
