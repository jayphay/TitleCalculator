import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useStore } from "../store/store.js";
import ChargesTableEntries from "./ChargesTableEntries.jsx";

export default function ChargesTable({charges}) {
    const {sellerCharges} = useContext(UserContext);
    const transactionType = useStore(state => state.transactionType);
    // console.log(transactionType);

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
                <thead>
                    <ChargesTableEntries chargeName={charges.name} 
                    buyerAmt={transactionType != "Refinance" ? "Buyer Pays" : "Borrower Pays"} 
                    sellerAmt={"Seller Pays"} />
                </thead>
                
                <tbody>
                    {Object.entries(charges).slice(1).map(([chargeName, amount], index) => (
                        amount != null && <ChargesTableEntries key={index} chargeName={chargeName} 
                        buyerAmt={amount} 
                        sellerAmt={sellerCharges[chargeName]}/> 
                    ))}
                </tbody>
                
                <tfoot>
                    <ChargesTableEntries chargeName={`Subtotal for ${charges.name}`}
                    buyerAmt={`$${new Intl.NumberFormat('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2}).format(total)}`}
                    sellerAmt={charges.name === "Title Charges" ? "$90" : "$0"} />
                </tfoot>
                
            </table>
        </div>
    )
}