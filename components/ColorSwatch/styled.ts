import styled from "styled-components";

interface Props {
  isSelected: boolean;
  size: number;
}

const VariantContainer = styled.div`
  display: flex;
  /* position: absolute; */
  /* bottom: 38px; */
  /* left: 50%; */
  /* transform: translateX(-50%); */
  column-gap: 0.5rem;
`;

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
