import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/store";

export default function CalculateButton() {
  const { lenderPurchase, cashPurcahse, refinance } = useContext(UserContext);
  const salesPrice = useStore((state) => state.salesPrice);
  const loanAmount = useStore((state) => state.loanAmount);
  const transactionType = useStore((state) => state.transactionType);

  const navigate = useNavigate();
  const setTransactionType = useStore((state) => state.setTransactionType);
  const setSaleAmount = useStore((state) => state.setSaleAmount);
  const setLoanAmt = useStore((state) => state.setLoanAmt);

  function handleClick() {
    if (transactionType == "Purchase with Financing")
      lenderPurchase(salesPrice, loanAmount);
    else if (transactionType == "Cash Purchase") cashPurcahse(salesPrice);
    else refinance(loanAmount);

    // console.log(titleCharges);
    setTransactionType(transactionType);
    setSaleAmount(salesPrice);
    setLoanAmt(loanAmount);

    // console.log(transactionType)

    navigate("/quote");
  }

  function checkFilled() {
    if (
      transactionType == "Purchase with Financing" &&
      loanAmount != "" &&
      salesPrice != ""
    )
      return true;
    else if (transactionType == "Cash Purchase" && salesPrice != "")
      return true;
    else if (transactionType == "Refinance" && loanAmount != "") return true;
    else return false;
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={!checkFilled()}
        className={`rounded-xl bg-sp-lb-600 cursor-pointer disabled:cursor-not-allowed shadow-md p-3 font-semibold disabled:opacity-50 ${
          checkFilled() ? "hover:bg-sp-lb-900" : ""
        } active:translate-y-1`}
      >
        Calculate
      </button>
    </div>
  );
}
