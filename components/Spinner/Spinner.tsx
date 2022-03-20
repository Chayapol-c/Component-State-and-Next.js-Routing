import React from "react";
import { SpinnerContainer } from "./styled";

const Spinner = ({ amount, setAmount, maxAmount }) => {
  return (
    <SpinnerContainer id="spinner">
      <button onClick={() => setAmount(amount - 1)} disabled={amount === 1}>
        -
      </button>
      <div>{amount}</div>
      <button
        onClick={() => setAmount(amount + 1)}
        disabled={amount >= maxAmount}
      >
        +
      </button>
    </SpinnerContainer>
  );
};

export default Spinner;
