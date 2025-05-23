import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useStore } from "../store/store";

export default function ChargesTableEntries({
  chargeName,
  buyerAmt,
  sellerAmt,
  id,
  regularCharge,
}) {
  const transactionType = useStore((store) => store.transactionType);

  return (
    <tr
      className={`${
        (chargeName != "Settlement Fees" ||
          chargeName != "Subtotal" ||
          chargeName != "Government Fees" ||
          chargeName != "Total") &&
        id % 2 == 0
          ? "bg-sp-lg-500"
          : ""
      } `}
    >
      <td className={`w-1/3 ${regularCharge ? "smd:pl-3 pl-1" : "pl-1"}`}>
        {chargeName}
      </td>
      <td className="w-1/3 pl-5">
        {buyerAmt == null || chargeName == "Payoff Special Handling Fee"
          ? ""
          : typeof buyerAmt == "number"
          ? `$${new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(buyerAmt)}`
          : buyerAmt}
      </td>
      {transactionType != "Refinance" ? (
        <td className="w-1/3">
          {sellerAmt == null
            ? ""
            : typeof sellerAmt == "number"
            ? `$${new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(sellerAmt)}`
            : sellerAmt}
        </td>
      ) : null}
    </tr>
  );
}
