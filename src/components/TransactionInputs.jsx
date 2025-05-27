import { UserContext } from "../context/UserContext";
import { useContext } from "react";

import MoneyInput from "./MoneyInput";
import { useStore } from "../store/store";

export default function TransactionInputs() {
  // const { salesPrice, setSalesPrice, loanAmount, setLoanAmount} = useContext(UserContext);
  const salesPrice = useStore((state) => state.salesPrice);
  const loanAmount = useStore((state) => state.loanAmount);
  const setSalesPrice = useStore((state) => state.setSaleAmount);
  const setLoanAmount = useStore((state) => state.setLoanAmt);

  const transactionType = useStore((state) => state.transactionType);

  if (transactionType == "Purchase with Financing") {
    return (
      <div className="flex flex-col gap-y-5">
        <MoneyInput
          name={"Sales Price"}
          price={salesPrice}
          setPrice={setSalesPrice}
        />
        <MoneyInput
          name={"Loan Amount"}
          price={loanAmount}
          setPrice={setLoanAmount}
        />
      </div>
    );
  } else if (transactionType == "Cash Purchase") {
    return (
      <div>
        <MoneyInput
          name={"Sales Price"}
          price={salesPrice}
          setPrice={setSalesPrice}
        />
      </div>
    );
  } else {
    return (
      <div>
        <MoneyInput
          name={"Loan Amount"}
          price={loanAmount}
          setPrice={setLoanAmount}
        />
      </div>
    );
  }
}
