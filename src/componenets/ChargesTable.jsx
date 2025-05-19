import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useStore } from "../store/store.js";
import ChargesTableEntries from "./ChargesTableEntries.jsx";

export default function ChargesTable({charges}) {
    const {sellerCharges, transactionType} = useContext(UserContext);

    let total = Object.entries(charges)
    .reduce((sum, [charge, amount]) => {
        if (charge !== "name" && typeof amount === 'number') {
            return sum + amount;
        }

        return sum;
    }, 0);

    const addToTotalOnce = useStore(state => state.addToTotalOnce);

    useEffect(() => {
        addToTotalOnce(total); // will only add if hasn't already
    }, [addToTotalOnce]);

    return (
        <div>
            <table>
                <ChargesTableEntries chargeName={charges.name} 
                buyerAmt={transactionType != "Refinance" ? "Buyer Pays" : "Borrower Pays"} 
                sellerAmt={"Seller Pays"} />

                {Object.entries(charges).slice(1).map(([chargeName, amount]) => (
                    amount != null && <ChargesTableEntries chargeName={chargeName} 
                    buyerAmt={amount} 
                    sellerAmt={sellerCharges[chargeName]}/> 
                ))}

                <ChargesTableEntries chargeName={`Subtotal for ${charges.name}`}
                buyerAmt={`$${total}`}
                sellerAmt={charges.name === "Title Charges" ? "$90" : "$0"} />

            </table>
        </div>
    )
}