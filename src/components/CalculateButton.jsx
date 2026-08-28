import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useRef, useState } from "react";
import { useStore } from "../store/store";
import { lenderPurchase, cashPurcahse, refinance } from "../utils/calculations";
import {
  ALlenderPurchase,
  ALcashPurcahse,
  ALrefinance,
} from "../utils/ALcalculations"

export default function CalculateButton() {
  const salesPrice = useStore((state) => state.salesPrice);
  const loanAmount = useStore((state) => state.loanAmount);
  const transactionType = useStore((state) => state.transactionType);
  const state = useStore((state) => state.state);


  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const [tooltipPos, setTooltipPos] = useState(null);
  const setTransactionType = useStore((state) => state.setTransactionType);
  const setSaleAmount = useStore((state) => state.setSaleAmount);
  const setLoanAmt = useStore((state) => state.setLoanAmt);
  const setTitleCharges = useStore((state) => state.setTitleCharges);
  const setRecordingCharges = useStore((state) => state.setRecordingCharges);
  const setSellerCharges = useStore((state) => state.setSellerCharges);

  function handleClick() {
    let result;

    if (state == "Georgia") {
      if (transactionType == "Purchase with Financing")
        result = lenderPurchase(salesPrice, loanAmount);
      else if (transactionType == "Cash Purchase")
        result = cashPurcahse(salesPrice);
      else result = refinance(loanAmount);
    } else if (state == "Alabama") {
      if (transactionType == "Purchase with Financing")
        result = ALlenderPurchase(salesPrice, loanAmount);
      else if (transactionType == "Cash Purchase")
        result = ALcashPurcahse(salesPrice);
      else result = ALrefinance(loanAmount);
    }

    setTitleCharges(result.titleCharges);
    setRecordingCharges(result.recordingCharges);
    setSellerCharges(result.sellerCharges);
    setTransactionType(transactionType);
    setSaleAmount(salesPrice);
    setLoanAmt(loanAmount);

    navigate("/quote");
  }

  function checkFilled() {
    if (
      transactionType == "Purchase with Financing" &&
      loanAmount != "" &&
      salesPrice != "" &&
      Number(salesPrice) >=  Number(loanAmount)
    )
      return true;
    else if (transactionType == "Cash Purchase" && salesPrice != "")
      return true;
    else if (transactionType == "Refinance" && loanAmount != "") return true;
    else return false;
  }

  function showTooltip() {
    if (checkFilled() || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setTooltipPos({
      top: rect.bottom + 8,
      left: rect.left + rect.width / 2,
    });
  }

  function hideTooltip() {
    setTooltipPos(null);
  }

  return (
    <div className="w-fit" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      <button
        ref={buttonRef}
        onClick={handleClick}
        disabled={!checkFilled()}
        className={`rounded-xl bg-cta-yellow-500 cursor-pointer disabled:cursor-not-allowed shadow-md p-3 mt-2 font-semibold disabled:opacity-50 ${
          checkFilled() ? "hover:bg-cta-alt-yellow-500" : ""
        } active:translate-y-1`}
      >
        Calculate
      </button>
      {tooltipPos &&
        createPortal(
          <span
            style={{ top: tooltipPos.top, left: tooltipPos.left }}
            className="pointer-events-none fixed w-max max-w-64 -translate-x-1/2 rounded-md bg-neutral-800 px-3 py-2 text-center text-xs text-white z-50"
          >
            Enter amounts and make sure loan amount is less than the sale amount
          </span>,
          document.body
        )}
    </div>
  );
}
