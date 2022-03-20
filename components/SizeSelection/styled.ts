import styled from "styled-components";

export const SizeSelectionContainer = styled.div`
  display: flex;
  column-gap: 4px;
`;

export const SizeContainer = styled.button`
  &:disabled {
    color: #bebebe;
  }
  padding: 12px 6px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid ${(props) => (props.isSelected ? "#6BBBFF" : "#BEBEBE")};
  background-color: ${(props) => (props.isSelected ? "#6BBEFF" : "#FFFFFF")};
  font-family: inherit;
  color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
`;
