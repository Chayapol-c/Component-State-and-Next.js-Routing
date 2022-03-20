import styled from "styled-components";
import { Props } from "../../pages/globalStyle";

export const ProductContainer = styled.div`
  display: flex;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.15);
  position: relative;
  margin: 2rem auto;
  max-width: 1424px;
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1rem;
  padding: 30px;

  .label {
    color: #bebebe;
    font-size: 16px;
    margin: 0 0 0.5rem 0;
  }
`;

export const ProductHeader = styled.div`
  /* border-bottom: 1px solid #cecece; */
  padding: 0 0 1rem 0;
  /* margin: 0 0 1rem 0; */
  .title {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 700;
  }

  .brand {
    color: #bebebe;
    font-size: 16px;
  }
`;

export const ProductPrice = styled.div`
  /* border-bottom: 1px solid #cecece; */
  padding: 0 0 1rem 0;
  .price {
    font-size: 24px;
    display: flex;
    align-items: flex-end;
    column-gap: 0.5rem;
  }
`;

export const ProductOptions = styled.div`
  padding: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  /* border-bottom: 1px solid #cecece; */
`;

export const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 2rem;
`;

export const ProductDescription = styled(ProductContainer)`
  flex-direction: column;
  padding: 30px;
  line-height: 32px;
  .title {
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 1rem 0;
  }
`;
export const Divider = styled.div`
  width: 100%;
  border: 1px solid #dedede;
`;

export const AddToCardButton = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  border-radius: 9999px;
  width: 25rem;
  height: 4rem;
  background-color: ${(props) => (props.isSelectSize ? "#6BBBFF" : "#BEBEBE")};
  cursor: pointer;
`;

export const Discount = styled.p`
  color: red;
  text-decoration: line-through;
  font-size: 12px;
  font-weight: 300;
`;
