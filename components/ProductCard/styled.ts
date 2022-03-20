import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  column-gap: 0.5rem;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 2px 2px 8px hsla(0, 100%, 0%, 0.15);
  width: 350px;
  height: 350px;
  position: relative;
  cursor: pointer;
`;

export const CardHeader = styled.div`
  width: 100%;
  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .brand {
    color: #bebebe;
    font-size: 12px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  color: #6bbbff;
  font-size: 24px;
  align-self: flex-end;
`;

export const Discount = styled.p`
  color: red;
  text-decoration: line-through;
  font-size: 12px;
  font-weight: 300;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 90%;
  height: 180px;
`;
