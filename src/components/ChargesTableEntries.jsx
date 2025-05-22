import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useStore } from "../store/store";

export default function ChargesTableEntries({chargeName, buyerAmt, sellerAmt}) {
    const transactionType = useStore(store => store.transactionType);  
    
    return (
        <tr>
            <td>{chargeName}</td>
            <td>{buyerAmt == null || chargeName == "Payoff Special Handling Fee" ? "" : typeof buyerAmt == "number"  ? 
            `$${new Intl.NumberFormat('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(buyerAmt)}` 
            : buyerAmt}</td>
            {transactionType != "Refinance" ? <td>{sellerAmt == null ?  "" : typeof sellerAmt == "number" ?
             `$${new Intl.NumberFormat('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2}).format(sellerAmt)}` 
             : sellerAmt}</td> : null}
        </tr>
    )
}