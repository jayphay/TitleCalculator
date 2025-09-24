import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useStore } from "../store/store.js";
import ChargesTableEntries from "./ChargesTableEntries.jsx";

export default function ChargesTable({ charges }) {
  const { sellerCharges } = useContext(UserContext);
  const transactionType = useStore((state) => state.transactionType);
  // console.log(transactionType);

  let total = Object.entries(charges).reduce((sum, [charge, amount]) => {
    if (charge !== "name" && typeof amount === "number") {
      return sum + amount;
    }

    return sum;
  }, 0);

  const addToTotalOnce = useStore((state) => state.addToTotalOnce);

  useEffect(() => {
    addToTotalOnce(total); // will only add if hasn't already
  }, [addToTotalOnce]);

  return (
    <div className="flex flex-col justify-evenly align-center">
      <table
        className={`table-fixed w-full overflow-hidden ${
          charges.name == "Settlement Fees" ? "rounded-t-md" : ""
        }`}
      >
        <thead className={"font-bold bg-sp-green-500 "}>
          <ChargesTableEntries
            chargeName={charges.name}
            buyerAmt={
              transactionType != "Refinance" ? "Buyer Pays" : "Borrower Pays"
            }
            sellerAmt={"Seller Pays"}
            regularCharge={false}
          />
        </thead>

        <tbody>
          {Object.entries(charges)
            .slice(1)
            .map(
              ([chargeName, amount], index) =>
                amount != null && (
                  <ChargesTableEntries
                    key={index}
                    id={index}
                    regularCharge={true}
                    chargeName={chargeName}
                    buyerAmt={amount}
                    sellerAmt={sellerCharges[chargeName]}
                  />
                )
            )}
        </tbody>

        <tfoot className="font-semibold bg-sp-lb-500">
          <ChargesTableEntries
            chargeName={`Subtotal`}
            buyerAmt={`$${new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(total)}`}
            sellerAmt={charges.name === "Settlement Fees" ? "$90" : "$0"}
            regularCharge={false}
          />
        </tfoot>
      </table>
    </div>
  );
}
