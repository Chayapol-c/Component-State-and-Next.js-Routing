import React from "react";
import { SpinnerContainer } from "./styled";

type SpinnerProps = {
  amount: number
  setAmount: (arg0: number) => void
  maxAmount: number
}

const Spinner = ({ amount, setAmount, maxAmount }: SpinnerProps) => {
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
