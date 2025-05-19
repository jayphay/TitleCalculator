import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function ChargesTableEntries({chargeName, buyerAmt, sellerAmt}) {
    const {transactionType} = useContext(UserContext);    

    return (
        <tr>
            <td>{chargeName}</td>
            <td>{buyerAmt ?? ""}</td>
            {transactionType != "Refinance" ? <td>{sellerAmt ?? ""}</td> : null}
        </tr>
    )
}